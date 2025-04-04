import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Importa RouterModule

import { AppRoutingModule } from './app-routing.module';  // Si tienes un módulo de rutas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsuariosModule } from './usuarios/usuarios.module';
import { VistasModule } from './vistas/vistas.module'; // Importar el módulo de vistas
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './error.interceptor'; // ✅ Importar el interceptor
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,  // Asegúrate de importar RouterModule aquí
    AppRoutingModule,  // Asegúrate de agregar el AppRoutingModule si lo tienes
    BrowserAnimationsModule,

    UsuariosModule,
    VistasModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

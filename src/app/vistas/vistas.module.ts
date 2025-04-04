import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Agregar
import { PaginatorModule } from 'primeng/paginator';

import { VistasRoutingModule } from './vistas-routing.module'; // ✅ Importar el módulo de rutas

import { CategoriasComponent } from './components/categorias/categorias.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    CategoriasComponent, // ✅ Declarar los componentes aquí
    HomeComponent // ✅ Declarar los componentes aquí
  ],
  imports: [
    CommonModule,
    FormsModule, // ✅ Necesario para formularios
    ReactiveFormsModule, // ✅ Para los formularios reactivos
    PaginatorModule,
    VistasRoutingModule // ✅ Importar el módulo de rutas
  ],
})
export class VistasModule { }

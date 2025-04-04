import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';  // Mantén el guard si lo necesitas

const routes: Routes = [
  {
    path: 'vistas', loadChildren: () => import('../app/vistas/vistas.module').then(m => m.VistasModule),
    canActivate: [authGuard]
  },
  {
    path: '', loadChildren: () => import('../app/usuarios/usuarios.module').then(m => m.UsuariosModule),
    canActivate: [authGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

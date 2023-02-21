import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      {
        path: 'clientes',
        loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesModule )
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'proveedores',
        component:ProveedoresComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminSoftchRoutingModule { }

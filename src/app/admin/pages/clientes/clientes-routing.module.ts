import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'agregar',
        component: AgregarComponent
      },
      {
        path:'',
        component: ListarComponent
      },
      {
        path: '**',
        redirectTo: ''
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
export class ClientesRoutingModule { }

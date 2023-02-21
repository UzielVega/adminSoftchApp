import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../admin/pages/home/home.component';
import { CrearCotizacionComponent } from './pages/crear-cotizacion/crear-cotizacion.component';
import { VerCotizacionComponent } from './pages/ver-cotizacion/ver-cotizacion.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children: [
      {
        path: 'crear-cotizacion',
        component:CrearCotizacionComponent
      },
      {
        path: 'ver-cotizacion',
        component: VerCotizacionComponent
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
export class CotizadorRoutingModule { }

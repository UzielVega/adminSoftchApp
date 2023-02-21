import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotizadorRoutingModule } from './cotizador-routing.module';

import { CrearCotizacionComponent } from './pages/crear-cotizacion/crear-cotizacion.component';
import { VerCotizacionComponent } from './pages/ver-cotizacion/ver-cotizacion.component';




@NgModule({
  declarations: [
    CrearCotizacionComponent,
    VerCotizacionComponent
  ],
  imports: [
    CommonModule,
    CotizadorRoutingModule
  ]
})
export class CotizadorModule { }

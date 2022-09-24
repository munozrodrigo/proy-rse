import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultadesRoutingModule } from './facultades-routing.module';
import { RectoradoComponent } from './pages/rectorado/rectorado.component';


@NgModule({
  declarations: [
    RectoradoComponent
  ],
  imports: [
    CommonModule,
    FacultadesRoutingModule
  ],
  exports: [
    CommonModule,
    FacultadesRoutingModule
  ]
})
export class FacultadesModule { }

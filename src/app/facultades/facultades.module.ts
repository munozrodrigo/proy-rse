import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultadesRoutingModule } from './facultades-routing.module';


@NgModule({
  declarations: [
    
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

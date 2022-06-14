import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RectoradoComponent } from './pages/rectorado/rectorado.component';
import { AmbitHomeComponent } from './pages/ambit-home/ambit-home.component';
import { AmbitosRoutingModule } from './ambitos-routing.module';


@NgModule({
  declarations: [
    RectoradoComponent,
    AmbitHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AmbitosRoutingModule
  ],
  providers: [],
  exports: [
    RectoradoComponent,
    AmbitHomeComponent
  ]
})
export class AmbitosModule { }

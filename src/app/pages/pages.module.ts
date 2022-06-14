import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    InicioComponent
  ]

})
export class PagesModule { }

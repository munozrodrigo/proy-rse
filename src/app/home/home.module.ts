import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './homeBase/home.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    InicioComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    InicioComponent,
    HeaderComponent
  ]

})
export class HomeModule { }

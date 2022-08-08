import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    InicioComponent
  ]
})
export class LoginModule { }

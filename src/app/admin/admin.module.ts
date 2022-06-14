import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdmHomeComponent } from './pages/adm-home/adm-home.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AdmHomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ],
  providers: [],
  exports: [
    AdmHomeComponent
  ]
})
export class AdminModule { }
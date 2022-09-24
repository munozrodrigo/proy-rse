import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';



const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import('./login/login.module'). then (m => m.LoginModule)
  },
  {
    path: "ambitos",
    loadChildren: () => import('./ambitos/ambitos.module'). then (m => m.AmbitosModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module'). then (m => m.AdminModule)
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

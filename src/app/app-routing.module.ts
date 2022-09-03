import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';
import { RedirectLogGuard } from './shared/guards/redirectLog.guard';


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
    path: "404",
    component: Error404Component
  },
  {
    path:'',
    pathMatch: 'full',
    //children:[],
    redirectTo: '/login'
    //canActivate: [RedirectLogGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

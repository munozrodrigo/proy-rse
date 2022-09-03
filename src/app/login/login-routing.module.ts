import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../shared/error404/error404.component';
import { RedirectLogGuard } from '../shared/guards/redirectLog.guard';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent,
    // pathMatch: 'full',
    children:[
      { 
        path: '404',
        component: Error404Component,
      },
      { 
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      { 
        path: '**',
        redirectTo: '404'
      }
    ]//,
    //canActivate: [RedirectLogGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

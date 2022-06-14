import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectoradoComponent } from '../ambitos/pages/rectorado/rectorado.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
    {
        path:'',
        component: InicioComponent
    },
    {
        path:'jaja',
        component: RectoradoComponent
    }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

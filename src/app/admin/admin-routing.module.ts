import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmHomeComponent } from './pages/adm-home/adm-home.component';

const routes: Routes = [
    {
      path:'',
      component: AdmHomeComponent ,
      pathMatch: 'full',
      children:[
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
      }
    ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbitHomeComponent } from './pages/ambit-home/ambit-home.component';

const routes: Routes = [
    {
      path:'',
      component: AmbitHomeComponent,
      pathMatch: 'full',
      children:[
        { 
          path: '',
          redirectTo: '/ambitos',
          pathMatch: 'full'
        }
    ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbitosRoutingModule { }
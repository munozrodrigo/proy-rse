import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: "ambitos",
    loadChildren: () => import('./ambitos/ambitos.module'). then (m => m.AmbitosModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module'). then (m => m.AdminModule)
  },
  {
    path: "pages",
    loadChildren: () => import('./pages/pages.module'). then (m => m.PagesModule)
  },
  {
    path: '**',
    redirectTo: 'pages',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

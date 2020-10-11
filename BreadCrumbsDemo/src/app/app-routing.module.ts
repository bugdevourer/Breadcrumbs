import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quadrangle',
    pathMatch: 'full'
  },
  {
    path: 'quadrangle',
    data:{
      breadcrumb: 'quadrangle'
    },
    loadChildren: () => import('./figures/quadrangle/quadrangle.module').then(m => m.QuadrangleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

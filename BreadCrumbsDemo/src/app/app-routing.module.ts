import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quadrangle',
    pathMatch: 'full'
  },
  {
    path: 'kite',
    loadChildren: () => import('./figures/kite/kite.module').then(m => m.KiteModule)
  },
  {
    path: 'parallelogram',
    loadChildren: () => import('./figures/parallelogram/parallelogram.module').then(m => m.ParallelogramModule)
  },
  {
    path: 'quadrangle',
    loadChildren: () => import('./figures/quadrangle/quadrangle.module').then(m => m.QuadrangleModule)
  },
  {
    path: 'rectangle',
    loadChildren: () => import('./figures/rectangle/rectangle.module').then(m => m.RectangleModule)
  },
  {
    path: 'rhombus',
    loadChildren: () => import('./figures/rhombus/rhombus.module').then(m => m.RhombusModule)
  },
  {
    path: 'square',
    loadChildren: () => import('./figures/square/square.module').then(m => m.SquareModule)
  },
  {
    path: 'trapezoid',
    loadChildren: () => import('./figures/trapezoid/trapezoid.module').then(m => m.TrapezoidModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

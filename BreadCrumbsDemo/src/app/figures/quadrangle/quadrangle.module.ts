import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadrangleComponent } from './quadrangle.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: QuadrangleComponent
  },
  {
    path: 'quadrangle',
    data:{
      breadcrumb: 'quadrangle'
    },
    loadChildren: () => import('./quadrangle.module').then(m => m.QuadrangleModule)
  },
  {
    path: 'kite',
    data:{
      breadcrumb: 'kite'
    },
    loadChildren: () => import('../kite/kite.module').then(m => m.KiteModule)
  },
  {
    path: 'parallelogram',
    data:{
      breadcrumb: 'parallelogram'
    },
    loadChildren: () => import('../parallelogram/parallelogram.module').then(m => m.ParallelogramModule)
  },
  {
    path: 'rectangle',
    data:{
      breadcrumb: 'rectangle'
    },
    loadChildren: () => import('../rectangle/rectangle.module').then(m => m.RectangleModule)
  },
  {
    path: 'rhombus',
    data:{
      breadcrumb: 'rhombus'
    },
    loadChildren: () => import('../rhombus/rhombus.module').then(m => m.RhombusModule)
  },
  {
    path: 'square',
    data:{
      breadcrumb: 'square'
    },
    loadChildren: () => import('../square/square.module').then(m => m.SquareModule)
  },
  {
    path: 'trapezoid',
    data:{
      breadcrumb: 'trapezoid'
    },
    loadChildren: () => import('../trapezoid/trapezoid.module').then(m => m.TrapezoidModule)
  },
];

@NgModule({
  declarations: [QuadrangleComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class QuadrangleModule { }

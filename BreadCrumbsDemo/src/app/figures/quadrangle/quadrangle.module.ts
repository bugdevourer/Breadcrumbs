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
    path: 'kite',
    data:{
      breadCrumb: 'kite'
    },
    loadChildren: () => import('../kite/kite.module').then(m => m.KiteModule)
  },
  {
    path: 'parallelogram',
    data:{
      breadCrumb: 'parallelogram'
    },
    loadChildren: () => import('../parallelogram/parallelogram.module').then(m => m.ParallelogramModule)
  },
  {
    path: 'rectangle',
    data:{
      breadCrumb: 'rectangle'
    },
    loadChildren: () => import('../rectangle/rectangle.module').then(m => m.RectangleModule)
  },
  {
    path: 'rhombus',
    data:{
      breadCrumb: 'rhombus'
    },
    loadChildren: () => import('../rhombus/rhombus.module').then(m => m.RhombusModule)
  },
  {
    path: 'square',
    data:{
      breadCrumb: 'square'
    },
    loadChildren: () => import('../square/square.module').then(m => m.SquareModule)
  },
  {
    path: 'trapezoid',
    data:{
      breadCrumb: 'trapezoid'
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

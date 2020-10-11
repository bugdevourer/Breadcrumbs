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
    loadChildren: () => import('../kite/kite.module').then(m => m.KiteModule)
  },
  {
    path: 'parallelogram',
    loadChildren: () => import('../parallelogram/parallelogram.module').then(m => m.ParallelogramModule)
  },
  {
    path: 'rectangle',
    loadChildren: () => import('../rectangle/rectangle.module').then(m => m.RectangleModule)
  },
  {
    path: 'rhombus',
    loadChildren: () => import('../rhombus/rhombus.module').then(m => m.RhombusModule)
  },
  {
    path: 'square',
    loadChildren: () => import('../square/square.module').then(m => m.SquareModule)
  },
  {
    path: 'trapezoid',
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

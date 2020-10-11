import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrapezoidComponent } from './trapezoid.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TrapezoidComponent
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
  }
];

@NgModule({
  declarations: [TrapezoidComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class TrapezoidModule { }

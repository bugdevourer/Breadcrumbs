import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallelogramComponent } from './parallelogram.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ParallelogramComponent
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
  }
];

@NgModule({
  declarations: [ParallelogramComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ParallelogramModule { }

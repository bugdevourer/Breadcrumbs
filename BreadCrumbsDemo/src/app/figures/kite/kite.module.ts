import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiteComponent } from './kite.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: KiteComponent
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
  }
];

@NgModule({
  declarations: [KiteComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class KiteModule { }

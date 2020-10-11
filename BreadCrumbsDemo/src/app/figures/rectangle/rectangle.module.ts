import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectangleComponent } from './rectangle.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RectangleComponent
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
  declarations: [RectangleComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class RectangleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RhombusComponent } from './rhombus.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RhombusComponent
  },
  {
    path: 'square',
    loadChildren: () => import('../square/square.module').then(m => m.SquareModule)
  }
];

@NgModule({
  declarations: [RhombusComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class RhombusModule { }

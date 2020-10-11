import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareComponent } from './square.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SquareComponent
  }
];

@NgModule({
  declarations: [SquareComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class SquareModule { }

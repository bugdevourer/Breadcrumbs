import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-quadrangle',
  templateUrl: './quadrangle.component.html',
  styleUrls: ['../figures.scss']
})
export class QuadrangleComponent implements AfterViewInit {

  constructor() { }

  public ngAfterViewInit(): void {
    const newLocal = document.getElementById('quadrangle');

    const firstCornerX = this.getRandomInt(0, 49);
    const firstCornerY = this.getRandomInt(0, 49);
    const secondCornerX = this.getRandomInt(51, 100);
    const secondCornerY = this.getRandomInt(0, 49);
    const thirdCornerX = this.getRandomInt(51, 100);
    const thirdCornerY = this.getRandomInt(51, 100);
    const forthCornerX = this.getRandomInt(0, 49);
    const forthCornerY = this.getRandomInt(51, 100);

    newLocal.style.clipPath = `polygon(${firstCornerX}% ${firstCornerY}%, ${secondCornerX}% ${secondCornerY}%, ${thirdCornerX}% ${thirdCornerY}%, ${forthCornerX}% ${forthCornerY}%)`
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

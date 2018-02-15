import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Totim } from '../model/totim';
import { Matrix } from '../model/matrix';
import { Pixel } from '../model/pixel';
import { MatrixService } from '../service/matrix.service';
import { Point } from '@agm/core/services/google-maps-types';
import { Point_Matrix_Lecko } from '../model/point';

@Component({
  selector: 'pixel-list',
  template: `
  <div *ngFor="let pixel of pixels">
    {{pixel.colourR}} - {{pixel.colourB}} - {{pixel.colourB}} - {{pixel.state}}
  </div>
`,

})
export class PixelListComponent implements OnInit {
  // column : Pixel = { colourG: 1, colourR : 1, colourB : 1, state : 1 };
  // pixels: Pixel[]
  // pixel : Point_Matrix_Lecko
  constructor(private matrixService: MatrixService) {
    // this.pixels = matrixService.getPixel();
  }
  ngOnInit() {
    // this.PixelsByLine(0, 34);
  }

  // getPixel(numero_line, numero_column): Pixel {
  //   console.log('Get Pixel')
  //   let point
  //   this.matrixService.getMatrix()
  //     .subscribe(result => {
  //       console.log(result);
  //       // console.log(result['line_' + numero_line]['column_' + numero_column]['colourR']);
  //       pixel = new Pixel(result['line_' + numero_line]['column_' + numero_column]['colourB'], result['line_' + numero_line]['column_' + numero_column]['colourG'], result['line_' + numero_line]['column_' + numero_column]['colourR'], result['line_' + numero_line]['column_' + numero_column]['state']);
  //       console.log(pixel);
  //     })
  //     console.log(pixel);
  //   return pixel;
  // }

  // PixelsByLine(numero_line, nb_column) {
  //   this.getPixel(numero_line, 1);
  //   for (let i = 0; i < nb_column; i++) {
  //     this.pixels.push(this.getPixel(numero_line, i));
  //   }
  //   console.log("Pixels :" + this.pixels)
  // }
}


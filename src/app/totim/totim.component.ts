import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Totim } from './model/totim';
import { Matrix } from './model/matrix';
import { Pixel } from './model/pixel';
import { MatrixService } from './service/matrix.service';


@Component({
  selector: 'totim',
  templateUrl: './totim.component.html',
  styleUrls: ['./totim.component.scss'],
  providers: [MatrixService]
})
export class TotimComponent implements OnInit {
  // column : Pixel = { colourG: 1, colourR : 1, colourB : 1, state : 1 };
  matrix : Matrix;
  constructor(private matrixService : MatrixService) { 
    
  }

  ngOnInit() {
    this.getMatrix();
  }

  getMatrix (): void {
    this.matrixService.getApi()
    .subscribe(result => {
      console.log(result);
      this.matrix = result
    });
  }
}

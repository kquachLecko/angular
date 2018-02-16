import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Totim } from './model/totim';
import { MatrixService } from './service/matrix.service';


@Component({
  selector: 'totim',
  templateUrl: './totim.component.html',
  styleUrls: ['./totim.component.scss'],
  providers: [MatrixService]
})
export class TotimComponent implements OnInit {
  // column : Pixel = { colourG: 1, colourR : 1, colourB : 1, state : 1 };
  constructor(private matrixService : MatrixService) { 
    
  }

  ngOnInit() {
          
  }


}

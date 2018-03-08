import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Totim } from './model/totim';
import { MatrixService } from './service/matrix.service';
import { TotimService } from './service/totim.service';


@Component({
  selector: 'totim',
  templateUrl: './totim.component.html',
  styleUrls: ['./totim.component.scss'],
  providers: [MatrixService, TotimService]
})
export class TotimComponent implements OnInit {
  constructor(private matrixService : MatrixService, private totimService : TotimService) { 
    
  }

  ngOnInit() {
          
  }


}

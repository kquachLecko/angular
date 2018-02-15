import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Totim } from '../model/totim';
import { MatrixService } from '../service/matrix.service';
import { Point } from '@agm/core/services/google-maps-types';
import { Point_Matrix_Lecko } from '../model/point';

@Component({
  selector: 'point',
  template: `
  <div *ngFor="let p of points" >
  [{{p.coord_line}} : {{p.coord_column}} ] : {{p.colourR}} - {{p.colourB}} - {{p.colourB}} - {{p.state}} 
  </div>
`,
  // - {{this.point.coord_column}} - {{this.point.colourR}} - {{this.point.colourB}} - {{this.point.colourB}} - {{this.point.state}}
})
export class PointComponent implements OnInit {
  // column : Pixel = { colourG: 1, colourR : 1, colourB : 1, state : 1 };
  point: Point_Matrix_Lecko
  points : Point_Matrix_Lecko[] = []
  constructor(private matrixService: MatrixService) {
  }
  ngOnInit() {
    console.log("Point Component")
    this.getMatrix();
  }

  getPoint(coord_line, coord_column): void {
    console.log('Get Point')
    let point
    this.matrixService.getApi()
      .subscribe(result => {
        console.log(result);
        // console.log(result['line_' + numero_line]['column_' + numero_column]['colourR']);
        this.point = new Point_Matrix_Lecko(
          result['line_' + coord_line]['column_' + coord_column]['colourB'],
          result['line_' + coord_line]['column_' + coord_column]['colourG'],
          result['line_' + coord_line]['column_' + coord_column]['colourR'],
          result['line_' + coord_line]['column_' + coord_column]['state'],
          coord_line,
          coord_column
        );
        console.log(this.point);
      })
  }
  getMatrix(): void {
    console.log('Get Matrix')
    let line = 32;
    let column = 63;
    this.matrixService.getApi()
      .subscribe(result => {
        for (var i = 0; i < line; i++) {
          for (var j = 0; j < column; j++) {
            let p = new Point_Matrix_Lecko(
              result['line_' + i]['column_' + j]['colourB'],
              result['line_' + i]['column_' + j]['colourG'],
              result['line_' + i]['column_' + j]['colourR'],
              result['line_' + i]['column_' + j]['state'],
              i,
              j
            );
            this.points.push(p)
          }
          // console.log(this.points)
        }
      });
  }
}
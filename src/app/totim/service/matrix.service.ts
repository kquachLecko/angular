import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Point_Matrix_Lecko } from '../model/point';

@Injectable()
export class MatrixService {

  private matrixURL = "http://localhost:8080/Totim/getFullMatrix?id_totim=totim_1"

  constructor(protected http: HttpClient) {

  }
  public getApi() {
    console.log(this.http.get(this.matrixURL));
    // return this.http.get(this.matrixURL);
    return this.http.get(this.matrixURL)
    // this.http.get("http://localhost:8080/Totim/getFullMatrix?id_totim=totim_1")
    // .map(res => res.json())
  }
  getPointSameColor(pointA : Point_Matrix_Lecko) {
    console.log("getPointSameColor")
    const line = 32;
    const column = 63;
    let pointsColor = [];
    this.getApi()
      .subscribe(result => {
        for (var i = 0; i < line; i++) {
          for (var j = 0; j < column; j++) {
            let p = new Point_Matrix_Lecko(
              result['line_' + i]['column_' + j]['colourR'],
              result['line_' + i]['column_' + j]['colourG'],
              result['line_' + i]['column_' + j]['colourB'],
              result['line_' + i]['column_' + j]['state'],
              i,
              j
            );
            if(pointA.sameColor(p)){
              pointsColor.push([p.coord_line, p.coord_column]);
            }
            
          }
        }
      });
      console.log(pointsColor);
      return pointsColor;
  }
}

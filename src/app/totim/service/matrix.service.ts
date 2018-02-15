import { Injectable } from '@angular/core';
import { Matrix } from '../model/matrix'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Point_Matrix_Lecko } from '../model/point';

@Injectable()
export class MatrixService {

  private matrixURL = "http://localhost:8080/Totim/getFullMatrix?id_totim=totim_1"

  constructor(public http: HttpClient) { 

  }
  public getApi (){
    console.log(this.http.get<Matrix>(this.matrixURL));
    return this.http.get<Matrix>(this.matrixURL);
    // this.http.get("http://localhost:8080/Totim/getFullMatrix?id_totim=totim_1")
    // .map(res => res.json())
  }


}

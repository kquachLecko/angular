import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Totim } from '../model/totim';

@Injectable()
export class TotimService {

  private matrixURL = "http://localhost:8080/Totim/getTotimInfos?id_totim=totim_1"

  constructor(protected http: HttpClient) { }
  
  public getApi() : Observable<Object> {
    return this.http.get(this.matrixURL)
  }
  
}

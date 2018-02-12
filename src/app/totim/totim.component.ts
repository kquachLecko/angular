import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Totim } from '../totim';

@Component({
  selector: 'totim',
  templateUrl: './totim.component.html',
  styleUrls: ['./totim.component.scss']
})
export class TotimComponent implements OnInit {
  matrix
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/Totim/getFullMatrix?id_totim=totim_1").toPromise().then(r => r.json()).then(r => this.matrix = r)

  }

}

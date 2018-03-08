import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Totim } from '../model/totim';
import { TotimService } from '../service/totim.service';

@Component({
  selector: 'totim-detail',
  template: `
  <div>
  Id : {{totim?.id}} <br/>
  Colour : {{totim?.colour}} <br/>
  Data : {{totim?.data}} <br/>
  From : {{totim?.from}} <br/>
  Client : {{totim?.client}} <br/>
  Description : {{totim?.description}}  <br/>
  token : {{totim?.token}} <br/>
  modification date : {{totim?.modification_date}} <br/>
  setup date : {{totim?.setup_date}}   <br/>  
  </div>
`,
})
export class TotimDetailComponent implements OnInit {
  
  totim: Totim;
  
  constructor(private totimService: TotimService) {
  
  }
  ngOnInit() {
    this.getTotim();
    console.log(this.totim);
  }

  getTotim(): void {
    console.log('Get Totim')
    this.totimService.getApi()
      .subscribe(result => {
        this.totim = new Totim(
            result['data'][0]['id'], 
            result['data'][0]['colour'],
            result['data'][0]['data'],
            result['data'][0]['from'],
            result['data'][0]['client'],
            result['data'][0]['description'],
            result['data'][0]['token'],
            result['data'][0]['modification_date'],
            result['data'][0]['setup_date'],
        )
        console.log(this.totim);
      })
  }
}
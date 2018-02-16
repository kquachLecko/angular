import { Chart } from 'angular-highcharts';
import { Component, OnInit } from '@angular/core';
import { PointComponent } from './point.component';
import { Point_Matrix_Lecko } from '../model/point';
import { MatrixService } from '../service/matrix.service';
import { Point } from '@agm/core/services/google-maps-types';

@Component({
    selector: 'chart',
    template: `
    Chart :
    <div [chart]="chart"></div>
  `
})
export class ChartComponent implements OnInit {

    chart: Chart
    pointsColor = []
    point_test = new Point_Matrix_Lecko(187, 52, 19, 1, 0, 1);

    constructor(private matrixService: MatrixService) {
  
    }
  
    ngOnInit() {
        this.init();
        this.getPointSameColor(this.point_test);
    }
    init() {
        console.log('Initialise Chart');
        console.log(this.pointsColor)
        let data = this.pointsColor;
        let chart = new Chart({
            chart: {
                type: 'scatter',
            },
            title: {
                text: 'Matrix'
            },
            xAxis: {
                title: {
                    text: 'Height (cm)'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Weight (kg)'
                }
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x} cm, {point.y} kg'
                    }
                }
            },
            series: [{
                color: 'rgba(187, 52, 19, 1)',
                data: data
            },
            ]
        });
        this.chart = chart;
    }
    addPoint(point) {
        if (this.chart) {
          this.chart.addPoint(point,0);
        } else {
          alert('init chart, first!');
        }
      }
    getPointSameColor(pointA : Point_Matrix_Lecko): void {
        console.log("getPointSameColor")
        const line = 32;
        const column = 63;
        this.matrixService.getApi()
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
                  this.pointsColor.push([p.coord_line, p.coord_column]);
                // this.addPoint([i,j])
                }

              }
            }
            console.log(this.pointsColor)
          });
      }
}
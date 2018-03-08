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
    pointsColor: Array<number[]> = []
    pointsNoir: Array<number[]> = []
    point_test = new Point_Matrix_Lecko(2, 1, 0, 1, 0, 1);
    constructor(private matrixService: MatrixService) {

    }

    ngOnInit() {
        this.init();
    }
    init() {
        console.log('Initialise Chart');
        let color = []
        let black = []
        const line = 32;
        const column = 63;
        this.matrixService.getApi()
            .subscribe(result => {
                console.log(result)
                for (var i = 0; i <= line; i++) {
                    for (var j = 0; j <= column; j++) {

                        let p = new Point_Matrix_Lecko(
                            result['line_' + i]['column_' + j]['colourR'],
                            result['line_' + i]['column_' + j]['colourG'],
                            result['line_' + i]['column_' + j]['colourB'],
                            result['line_' + i]['column_' + j]['state'],
                            i,
                            j
                        );
                        if (this.point_test.sameColor(p)) {
                            color.push([p.coord_column, p.coord_line]);
                        }
                        else {
                            black.push([p.coord_column, p.coord_line]);
                        }
                    }
                }
                console.log(black)
                this.initChart(color, black);
            });
    }
    initChart(color, black) {
        let chart = new Chart({
            chart: {
                type: 'scatter',
                zoomType: 'xy',
            },
            title: {
                text: 'Matrix'
            },

            xAxis: {
                title: {
                    text: 'x'
                },
                min: 0,
                max: 70,
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
                minPadding: 0,
                maxPadding: 0,
            },
            yAxis: {
                title: {
                    text: 'y'
                },
                min: 0,
                max: 40,
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
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
                        pointFormat: '{point.x}, {point.y}'
                    },

                }
            },
            series: [{
                color: 'rgba(2, 1, 0, 1)',
                data: color,
            }, {
                color: 'rgba(0, 0, 0, 1)',
                data: black
            }
            ]
        });
        this.chart = chart;
    }
    addPoint(point) {
        if (this.chart) {
            this.chart.addPoint(point, 0);
        } else {
            alert('init chart, first!');
        }
    }

    getPointSameColor(pointA: Point_Matrix_Lecko): void {
        console.log("getPointSameColor")
        const line = 32;
        const column = 63;
        this.matrixService.getApi()
            .subscribe(result => {
                for (var i = 0; i <= line; i++) {
                    for (var j = 0; j <= column; j++) {
                        let p = new Point_Matrix_Lecko(
                            result['line_' + i]['column_' + j]['colourR'],
                            result['line_' + i]['column_' + j]['colourG'],
                            result['line_' + i]['column_' + j]['colourB'],
                            result['line_' + i]['column_' + j]['state'],
                            i,
                            j
                        );
                        if (pointA.sameColor(p)) {
                            this.pointsColor.push([p.coord_line, p.coord_column]);
                        }
                        else {
                            this.pointsNoir.push([p.coord_line, p.coord_column]);
                        }
                    }
                }
                console.log(this.pointsColor)
            });
    }
}
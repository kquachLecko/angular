import { Chart } from 'angular-highcharts';
import { Component, OnInit } from '@angular/core';
import { PointComponent } from './point.component';
import { Point_Matrix_Lecko } from '../model/point';
import { MatrixService } from '../service/matrix.service';
import { Point } from '@agm/core/services/google-maps-types';
import { rgb } from 'd3-color';

@Component({
    selector: 'chart',
    template: `
    Chart :
    <div [chart]="chart"></div>
  `
})
export class ChartComponent implements OnInit {
    series = new Array();
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
        this.getSeries();
        //this.initChart();
    }
    initChart() {
        //let series = this.getSeries();
        let chart = new Chart({
            chart: {
                type: 'scatter',
                zoomType: 'xy',
                inverted:true,
            },
            title: {
                text: 'Matrix'
            },
            
            xAxis: {
                title: {
                    text: 'x'
                },
                min: 0,
                max: 40,
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
                minPadding: 0,
                maxPadding: 1,
            },
            yAxis: {
                title: {
                    text: 'y'
                },
                min: 0,
                max: 70,
                minPadding: 0,
                maxPadding: 1,
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 4,
                        symbol: 'square'
                    },
                }
            },
            series: [{
                color: 'rgba(2, 1, 0, 1)',
                data: [0,1],
            }, {
                color: 'rgba(255, 79, 79, 1)',
                data: [5,5]
            }
            ]
        });
        //chart.options.series= [{color: 'rgb(60,60,60)' , data: [[1,0]]}];
        // console.log(chart.options.series);
        chart.options.series=this.series;
        this.chart = chart;
    }
    addPoint(point) {
        if (this.chart) {
            this.chart.addPoint(point, 0);
        } else {
            alert('Init chart, first!');
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
                //console.log(this.pointsColor)
            });
    }
    getSeries() {
        const line = 32;
        const column = 63;
        console.log("GetDiffColor");
        let series = [{ r: 0, g: 0, b: 0, data: [] }]
        return this.matrixService.getApi()
            .subscribe(result => {
                //console.log(result);
                //console.log(result['line_11']['column_47']['colourR']);
                for (var i = 0; i < line; i++) {
                    for (var j = 0; j < column; j++) {
                        let find: boolean = false;
                        for (var k = 0; k < series.length; k++) {
                            if (
                                result['line_' + i]['column_' + j]['colourR'] == series[k]['r'] &&
                                result['line_' + i]['column_' + j]['colourG'] == series[k]['g'] &&
                                result['line_' + i]['column_' + j]['colourB'] == series[k]['b']
                            ) {
                                series[k]['data'].push([i, j]);
                                find = true;
                            }
                            else if (k == series.length - 1 && find == false) {
                                //console.log("New serie");
                                series.push({
                                    r: result['line_' + i]['column_' + j]['colourR'],
                                    g: result['line_' + i]['column_' + j]['colourG'],
                                    b: result['line_' + i]['column_' + j]['colourB'],
                                    data: [[i, j]]
                                })
                            }
                        }
                    }
                }
                console.log(series);
                this.series = series;
                this.transformSerieforChart(series);
                this.initChart();
            });
    }
    transformSerieforChart(series){
        let transform_series = new Array();
        for(var i=0; i<series.length;i++){
            transform_series.push({color:'rgba('+series[i]['r']+','+series[i]['g']+','+series[i]['b']+',1)', data : series[i]['data']})
        }
        console.log(transform_series);
        this.series = transform_series;
    }
}
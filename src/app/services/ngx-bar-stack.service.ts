import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Injectable({
  providedIn: 'root'
})
export class NgxBarStackService {

  //MOCK DATA FOR DEMONSTRATION PURPOSES
  layoutSizes: { [id: string]: [number, number] } = {};
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Countries';
  yAxisLabel: string = 'Population';
  animations: boolean = true;

  colorScheme2: Color = {
    domain: ['#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', '#edc949', '#af7aa1'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'vertical stacked'
  };

  countriesPopulationByYear = [
    {
      name: 'Germany',
      series: [
        {
          name: '1990',
          value: 62000000
        },
        {
          name: '2010',
          value: 73000000
        },
        {
          name: '2011',
          value: 89400000
        }
      ]
    },

    {
      name: 'USA',
      series: [
        {
          name: '1990',
          value: 250000000
        },
        {
          name: '2010',
          value: 309000000
        },
        {
          name: '2011',
          value: 311000000
        }
      ]
    },

    {
      name: 'France',
      series: [
        {
          name: '1990',
          value: 58000000
        },
        {
          name: '2010',
          value: 50000020
        },
        {
          name: '2011',
          value: 58000000
        }
      ]
    },
    {
      name: 'UK',
      series: [
        {
          name: '1990',
          value: 57000000
        },
        {
          name: '2010',
          value: 62000000
        }
      ]
    }
  ];

  // END OF MOCK DATA

  constructor(private http: HttpClient) { }

  //https://angular.io/guide/http
  mockGetNGXBarStackedData(){
    let ngxBarStacked = {
      xAxis: this.xAxis, 
      yAxis: this.yAxis, 
      showXAxisLabel: this.showXAxisLabel, 
      showYAxisLabel: this.showYAxisLabel,
      xAxisLabel: this.xAxisLabel,
      yAxisLabel: this.yAxisLabel,
      animations: this.animations,
      colorScheme2: this.colorScheme2,
      data: this.countriesPopulationByYear
    }
    return ngxBarStacked
    //return this.http.get("#")
  }
}

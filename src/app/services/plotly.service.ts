import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlotlyService {

  //MOCK DATA FOR DEMONSTRATION PURPOSES
  config = {responsive: true}

  trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 6, 3, 6, 1],
    mode: 'markers',
    type: 'scatter',
    name: 'Team A',
    text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
    marker: { size: 12 }
  }
  
  trace2 = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5],
    y: [4, 1, 7, 1, 4],
    mode: 'markers',
    type: 'scatter',
    name: 'Team B',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    marker: { size: 12 }
  }
  
  data = [ this.trace1, this.trace2 ];
  
  layout = {
    xaxis: {
      range: [ 0.75, 5.25 ]
    },
    yaxis: {
      range: [0, 8]
    },
    title:'Document Cluster Scatter Plot'
  }
  // END OF MOCK DATA

  constructor(private http: HttpClient) { }

  //https://angular.io/guide/http
  mockGetplotlyClusterData(){
    let plotlyGraph = {data: this.data, layout: this.layout, config: this.config}
    return plotlyGraph
    //return this.http.get("#")
  }


}

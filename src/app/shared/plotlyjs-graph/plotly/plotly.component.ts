import { Component, Input, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

declare var Plotly: any;

@Component({
  selector: 'app-plotly',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit {
  
  @Input() plotlyId!: string
  @Input() config?: any
  @Input() data?: any 
  @Input() layout?: any 
  @Input() figToJson?: any

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const config = {responsive: true}
    Plotly.newPlot( this.plotlyId, [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }], {
      margin: { t: 0 } }, config )
  }
}

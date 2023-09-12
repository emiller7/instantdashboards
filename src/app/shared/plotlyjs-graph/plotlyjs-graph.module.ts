import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyComponent } from './plotly/plotly.component';

@NgModule({
  declarations: [
    PlotlyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    PlotlyComponent 
  ]
})
export class PlotlyjsGraphModule { }

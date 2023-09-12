import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import { TagCloudComponent } from 'angular-tag-cloud-module';
import { MatListModule } from '@angular/material/list';
import { PlotlyjsGraphModule } from 'src/app/shared/plotlyjs-graph/plotlyjs-graph.module';
import { ToolBarModule } from 'src/app/shared/tool-bar/tool-bar.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    KtdGridModule,
    PlotlyjsGraphModule,
    NgxChartsModule,
    MatIconModule,
    ToolBarModule,
    TagCloudComponent,
    MatSidenavModule,
    MatListModule
  ]
})
export class HomeModule { }

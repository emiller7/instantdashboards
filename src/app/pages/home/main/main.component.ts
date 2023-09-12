import { ChangeDetectorRef, Inject, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { KtdGridLayout, ktdTrackById, KtdGridItemResizeEvent, KtdGridComponent } from '@katoid/angular-grid-layout';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { DOCUMENT } from '@angular/common';
import { fromEvent, merge, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { PlotlyService } from 'src/app/services/plotly.service';
import { NgxBarStackService } from 'src/app/services/ngx-bar-stack.service';

declare var Plotly: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  @ViewChild(KtdGridComponent, {static: true}) grid!: KtdGridComponent;
  //@ViewChild('plotlyjsGraph1') plotlyjsGraph1!: ElementRef;
  @ViewChild('plotlyjsGraph2') plotlyjsGraph2!: ElementRef;
  cols: number = 6;
  rowHeight: number = 100;
  layout: KtdGridLayout = [
      {id: '0', x: 0, y: 0, w: 3, h: 3},
      {id: '1', x: 3, y: 0, w: 3, h: 3},
      {id: '2', x: 0, y: 3, w: 3, h: 3, minW: 2, minH: 3},
      {id: '3', x: 3, y: 3, w: 3, h: 3, minW: 2, maxW: 3, minH: 2, maxH: 6},
  ];
  trackById = ktdTrackById

  layoutSizes: { [id: string]: [number, number] } = {};//
  
  compactType: 'vertical' | 'horizontal' | null = 'vertical';
 
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 1000,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 400,
    overflow: true,
  };

  data: CloudData[] = [
    {text: 'dog', weight: 8, tooltip: 'info'},
    {text: 'cat', weight: 10, tooltip: 'info'},
    {text: 'ball', weight: 7, tooltip: 'info'},
    {text: 'rabbit', weight: 17, tooltip: 'info'},
    {text: 'cheese', weight: 12, tooltip: 'info'},
    {text: 'house', weight: 2, tooltip: 'info'},
    {text: 'mall', weight: 4, tooltip: 'info'},
    {text: 'cloud', weight: 9, tooltip: 'info'},
    {text: 'computer', weight: 4, tooltip: 'info'},
    {text: 'storage', weight: 6, tooltip: 'info'},
    {text: 'web', weight: 8, tooltip: 'info'},
    {text: 'hippopotamus', weight: 10, tooltip: 'info'}, 
    {text: 'incomprehensibilities', weight: 10, tooltip: 'info'},
  ];

  mywidth = 1000
  myheight = 400
  private resizeSubscription: Subscription;

  clusterChart: any
  nxgBarStackedChart: any

  constructor(
    @Inject(DOCUMENT) public document: Document, 
    private cd: ChangeDetectorRef,
    private plotlyService: PlotlyService,
    private ngxBarStackService: NgxBarStackService
    ) { 
    this.resizeSubscription = merge(
      fromEvent(window, 'resize'),
      fromEvent(window, 'orientationchange')
  ).pipe(
      debounceTime(50)
  ).subscribe(() => {
      this.grid.resize();
      this.calculateLayoutSizes();
  });
  }
  
  ngOnInit(): void {
    // TODO: 
    // BELOW IS A MOCK METHOD TO GET DATA FROM A SERVICE
    // THIS METHOD SHOULD BE REPLACED AND USE THE DOC LISTED BELOW
    // https://www.telerik.com/blogs/angular-basics-how-to-use-httpclient
    this.clusterChart = this.plotlyService.mockGetplotlyClusterData()
    this.nxgBarStackedChart = this.ngxBarStackService.mockGetNGXBarStackedData()
  }

  ngAfterViewInit() {
    const config = {responsive: true}
    const data2 = [{
        type: "treemap",
        labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
        parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ]
  }]
  const layout2 = {annotations: {text: "branchvalues: <b>remainder</b>"}}
    Plotly.newPlot(this.plotlyjsGraph2.nativeElement, data2, layout2, config)
  }

  onLayoutUpdated(layout: KtdGridLayout) {
    this.layout = layout;
    this.calculateLayoutSizes();
}

ngOnDestroy() {
  this.resizeSubscription.unsubscribe();
}

onSelect(id: string): void {
  console.log('Item clicked', id);
}

onGridItemResize(gridItemResizeEvent: KtdGridItemResizeEvent) {

  this.layoutSizes[gridItemResizeEvent.gridItemRef.id] = [gridItemResizeEvent.width, gridItemResizeEvent.height];
  this.cd.detectChanges();

  var update = {width: gridItemResizeEvent.width, height: gridItemResizeEvent.height};
  if(gridItemResizeEvent.gridItemRef.id == '0'){
    Plotly.relayout("0-p", update)
  }else if(gridItemResizeEvent.gridItemRef.id == '1'){
    Plotly.relayout(this.plotlyjsGraph2.nativeElement, update)
  }else if(gridItemResizeEvent.gridItemRef.id == '3'){
    this.myheight = gridItemResizeEvent.height
    this.mywidth = gridItemResizeEvent.width
  }
}

    /**
     * Calculates and sets the property 'this.layoutSizes' with the [width, height] of every item.
     * This is needed to set manually the [width, height] for every grid item that is a chart.
     */
    private calculateLayoutSizes() {

      const gridItemsRenderData = this.grid.getItemsRenderData();
      this.layoutSizes =
          Object.keys(gridItemsRenderData)
              .reduce((acc, cur) => ({
                  ...acc,
                  [cur]: [gridItemsRenderData[cur].width, gridItemsRenderData[cur].height]
              }), {});
     
       var update = {width: this.layoutSizes[0][0], height: this.layoutSizes[0][1]};
       Plotly.relayout("0-p", update)
       var update = {width: this.layoutSizes[1][0], height: this.layoutSizes[1][1]};
       Plotly.relayout(this.plotlyjsGraph2.nativeElement, update)
       this.myheight = this.layoutSizes[3][1]
       this.mywidth = this.layoutSizes[3][0]
  }

}

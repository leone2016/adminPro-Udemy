import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('ChartLabels') doughnutChartLabels: any;
  // tslint:disable-next-line:no-input-rename
  @Input('ChartData') doughnutChartData: any;
  // tslint:disable-next-line:no-input-rename
  @Input('ChartType') doughnutChartType: any;
  constructor() { }

  ngOnInit() {
  }

}

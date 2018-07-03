import { Component, OnInit, ComponentFactoryResolver, ReflectiveInjector, ElementRef ,EventEmitter, Output, Inject, Input,ViewChild} from '@angular/core';

@Component({ 
  selector: 'service-metrics',
  templateUrl: './service-metrics.component.html',
  styleUrls: ['./service-metrics.component.scss']
})
export class ServiceMetricsComponent implements OnInit {
  @Input() service;
  public filterData
  public errorData = {};


  constructor() {

  }

  ngOnInit() {

  }

  refresh() {

  }

  applyFilter() {

  }


  getFilterData() {

  }

  queryMetricsData() {

  }

  selectMetric() {

  }

  formatGraphData() {

  }


}

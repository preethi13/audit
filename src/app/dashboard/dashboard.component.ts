import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';
import { area } from 'd3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    let chart = c3.generate({
      bindto: '#chart1',
      size: {
        height: 280,
        width: 500
      },
      padding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      data: {
        columns: [
          ['Health and Welfare', 10],
          ['revenue', 3],
          ['Education', 6],
          ['Women and Child', 8]
        ],
        type:'donut'
      },
      donut: {
        title: 'Units Audited'
      }
    });

    let chart3 = c3.generate({
      bindto: '#chart3',
      size: {
        height: 280,
        width: 500
      },
      padding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      data: {
        columns: [
          ['Health and Welfare',2,5,1,2,4,2],
          ['Revenue',1,3,5,6,2,1],
          ['Education',2,1,4,1,5,1],
          ['Women and Child',0,1,4,1,1,2]
        ],
        type: 'bar',
        groups: [
          ['Health and Welfare', 'Revenue', 'Education', 'Women and Child']
        ]
      },
      bar:{
        width:20
      },
      axis: {
        x: {
          type: 'category',
          categories: ['2013-14','2014-15','2015-16','2016-17','2017-18','2018-19']
        }
      }
    });
    let chart2 = c3.generate({
      bindto: '#chart2',
      size: {
        height: 280,
        width: 500
      },
      padding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      data: {
        rows: [
          ['x','Health and Welfare','revenue','Education','Women and Child'],
          ['Health and Welfare',28],
          ['revenue',27],
          ['Education',25],
          ['Women and Child',22]

        ],
        type: 'area-spline',
      },
      bar: {
        width: 20
      },
      axis: {
        x: {
          type: 'category',
          categories: ['Health and Welfare', 'revenue', 'Education', 'Women and Child']
        }
      }
    });
    let chart4 = c3.generate({
      bindto: '#chart4',
      size: {
        height: 280,
        width: 500
      },
      padding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      data: {
        rows: [
          ['x','Health and Welfare','revenue','Education','Women and Child'],
          ['Health and Welfare',10],
          ['revenue',7],
          ['Education',13],
          ['Women and Child',12]

        ],
        type: 'area',
      },
      bar: {
        width: 20
      },
      axis: {
        x: {
          type: 'category',
          categories: ['Health and Welfare', 'revenue', 'Education', 'Women and Child']
        }
      }
    });

  }

}

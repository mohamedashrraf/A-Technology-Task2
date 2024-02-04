// charts.component.ts

import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  chart: ApexCharts = {} as ApexCharts;

  ngOnInit() {
    var options = {
  chart: {
    height: 280,
    type: "radialBar"
  },

  series: [67],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%"
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "13px"
        },
        value: {
          color: "#111",
          fontSize: "30px",
          show: true
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  labels: ["Progress"]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();




    const options2: ApexOptions = {
      series: [
        { name: '', data: [40, 150, 30, 60, 120, 90, 30,70,100,80] },
      ],
      chart: {
        height: 140,
        width: 130,
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      colors: ['#fff'],
    };

    this.chart = new ApexCharts(document.querySelector("#chart22"), options2);
    this.chart.render();
  }
}

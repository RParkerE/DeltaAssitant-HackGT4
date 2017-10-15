import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlannerPage } from "../planner/planner";
import { Chart } from 'chart.js';

Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ["1PM", "2PM", "3PM", "4PM"],
        datasets: [
          {
            label: "Checkpoint 0",
            fill: false,
            lineTension: 0.05,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 30, 45, 60, 56, 55, 40],
            spanGaps: false,
          },
          {
            label: "Checkpoint 1",
            fill: false,
            lineTension: 0.05,
            backgroundColor: "rgba(203,10,10,0.4)",
            borderColor: "rgba(203,10,10,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(203,10,10,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(203,10,10,1)",
            pointHoverBorderColor: "rgba(203,10,10,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [15, 30, 45, 60, 86, 50, 20],
            spanGaps: false,
          },
          {
            label: "Checkpoint 2",
            fill: false,
            lineTension: 0.05,
            backgroundColor: "rgba(232,232,12,0.4)",
            borderColor: "rgba(232,232,12,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(232,232,12,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(232,232,12,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [67, 50, 95, 60, 76, 45, 50],
            spanGaps: false,
          },
          {
            label: "Checkpoint 3",
            fill: false,
            lineTension: 0.05,
            backgroundColor: "rgba(193,102,10,0.4)",
            borderColor: "rgba(193,102,10,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(193,102,10,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(193,102,10,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [15, 10, 65, 40, 26, 35, 30],
            spanGaps: false,
          }
        ]
      }
    })
  }

  openPlanner() {
    this.navCtrl.setRoot(PlannerPage);
  }

}


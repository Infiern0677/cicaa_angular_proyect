import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from 'src/app/servicios/api/api.service';


Chart.register(...registerables);

@Component({
  selector: 'app-adasboard',
  templateUrl: './adasboard.component.html',
  styleUrls: ['./adasboard.component.scss']
})
export class AdasboardComponent implements OnInit {

  constructor(public api:ApiService) {

   }

  ngOnInit(): void {
    this.RenderChart();
    document.getElementById("user").innerHTML = localStorage.name;
  }

  RenderChart() {

    const meses = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const dias = [
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabados',
      'Domingos'
    ];

    const piChart = new Chart("piChart", {
      type: 'radar',
      data: {
        labels: meses,
        datasets: [{
          label: 'Inasistencias',
          data: [12, 7, 23, 27, 10, 17, 21, 17, 13, 17, 20, 17],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Asistencias',
          data: [20, 17, 20, 17, 20, 17, 20, 17, 20, 17, 20, 17],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const lineChart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: dias,
        datasets: [{
          label: 'Inasistencias',
          data: [4, 7, 15, 20, 27, 5, 11, 21, 3, 17, 25, 17],
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Asistencias',
          data: [2, 17, 20, 7, 20, 17, 10, 12, 20, 17, 26, 9],
          backgroundColor: [
            
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}


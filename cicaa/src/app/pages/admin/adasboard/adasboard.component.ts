import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from 'src/app/servicios/api/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ListaUsuariosI } from '../../../model/usuario.interface';
import { logIngresosI } from 'src/app/model/logIngresos.interface';
import { logIngresosDiasI } from 'src/app/model/logIngresosDias.interfaces';
import { ListaInformacionPerfilI } from 'src/app/model/informacionPerfil.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
Chart.register(...registerables);

export interface UserElement {
  name: string;
  position: number;
  email: string;
}
const ELEMENT_DATA: UserElement[] = [
  { position: 1, name: 'John', email: 'john@gmail.com' },
  { position: 2, name: 'Herry', email: 'herry@gmail.com' },
  { position: 3, name: 'Ann', email: 'ann@gmail.com' },
  { position: 4, name: 'Johnny', email: 'johnny@gmail.com' },
  { position: 5, name: 'Roy', email: 'roy@gmail.com' },
  { position: 6, name: 'Kia', email: 'kia@gmail.com' },
  { position: 7, name: 'Merry', email: 'merry@gmail.com' },
  { position: 8, name: 'William', email: 'william@gmail.com' },
  { position: 9, name: 'Shia', email: 'shia@gmail.com' },
  { position: 10, name: 'Kane', email: 'kane@gmail.com' },
  { position: 2, name: 'Herry', email: 'herry@gmail.com' },
  { position: 3, name: 'Ann', email: 'ann@gmail.com' },
  { position: 4, name: 'Johnny', email: 'johnny@gmail.com' },
  { position: 5, name: 'Roy', email: 'roy@gmail.com' },
  { position: 6, name: 'Kia', email: 'kia@gmail.com' },
  { position: 7, name: 'Merry', email: 'merry@gmail.com' },
  { position: 8, name: 'William', email: 'william@gmail.com' },
  { position: 9, name: 'Shia', email: 'shia@gmail.com' },
  { position: 10, name: 'Kane', email: 'kane@gmail.com' },
  { position: 2, name: 'Herry', email: 'herry@gmail.com' },
  { position: 3, name: 'Ann', email: 'ann@gmail.com' },
  { position: 4, name: 'Johnny', email: 'johnny@gmail.com' },
  { position: 5, name: 'Roy', email: 'roy@gmail.com' },
  { position: 6, name: 'Kia', email: 'kia@gmail.com' },
  { position: 7, name: 'Merry', email: 'merry@gmail.com' },
  { position: 8, name: 'William', email: 'william@gmail.com' },
  { position: 9, name: 'Shia', email: 'shia@gmail.com' },
  { position: 10, name: 'Kane', email: 'kane@gmail.com' },
];

@Component({
  selector: 'app-adasboard',
  templateUrl: './adasboard.component.html',
  styleUrls: ['./adasboard.component.scss'],
})
export class AdasboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  usuariosLista: ListaUsuariosI[] = [];
  informacionPerfilLista: ListaInformacionPerfilI[]=[];
  logIngresosLista: logIngresosI[] = [];
  logIngresosListaDias: logIngresosDiasI[] = [];
  helper = new JwtHelperService();
  decode_token=this.helper.decodeToken(localStorage.getItem('token'));
  constructor(public api: ApiService, private router: Router) {
    //   this.api.getLogIngresos().subscribe((dataCantidad) => {
    //   this.logIngresosLista = dataCantidad;
    //   console.log(dataCantidad);
    //   this.RenderChart(this.logIngresosLista, this.logIngresosListaDias);
    // });
    // this.api.getLogIngresosDias().subscribe((dataCantidad2) => {
    //   this.logIngresosListaDias = dataCantidad2;
    //   console.log(dataCantidad2[0]['Lunes']);
    //   // this.RenderChart(this.logIngresosLista, this.logIngresosListaDias);
    // });
  }

  ngOnInit(): void {
    this.pintarDatos();
    // this.usuariosLista=this.decode_token;
    // console.log(this.usuariosLista)
  }

  pintarDatos() {
    this.informacionPerfilLista=this.decode_token;
    this.api.getUsuarios().subscribe((data) => {
      this.usuariosLista = data;
      // console.log(data);
    });

    this.api.getLogIngresos().subscribe((dataCantidad) => {
      this.logIngresosLista = dataCantidad;
      // console.log(dataCantidad, "desde nognit");
      // this.RenderChart(this.logIngresosLista, this.logIngresosListaDias);
      if(dataCantidad.length>0){
        const meses = [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ];
        const dias = [
          'Lunes',
          'Martes',
          'Miercoles',
          'Jueves',
          'Viernes',
          'Sabados',
          'Domingos',
        ];

        const piChart = new Chart('piChart', {
          type: 'radar',
          data: {
            labels: meses,
            datasets: [
              {
                label: 'Inasistencias',
                data: [dataCantidad[0]['January'], dataCantidad[0]['February'], dataCantidad[0]['March'], dataCantidad[0]['April'], dataCantidad[0]['May'], dataCantidad[0]['June'], dataCantidad[0]['July'], dataCantidad[0]['August'], dataCantidad[0]['September'], dataCantidad[0]['October'], dataCantidad[0]['November'], dataCantidad[0]['December']],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
              {
                label: 'Asistencias',
                data: [dataCantidad[1]['January'], dataCantidad[1]['February'], dataCantidad[1]['March'], dataCantidad[1]['April'], dataCantidad[1]['May'], dataCantidad[1]['June'], dataCantidad[1]['July'], dataCantidad[1]['August'], dataCantidad[1]['September'], dataCantidad[1]['October'], dataCantidad[1]['November'], dataCantidad[1]['December']],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    });
    this.api.getLogIngresosDias().subscribe((dataCantidad2) => {
      this.logIngresosListaDias = dataCantidad2;
      // console.log(dataCantidad2, "desde nognit");
      // this.RenderChart(this.logIngresosLista, this.logIngresosListaDias);

      const dias = [
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabados',
        'Domingos',
      ];
      if (dataCantidad2.length > 0) {
        const lineChart = new Chart('lineChart', {
          type: 'bar',
          data: {
            labels: dias,
            datasets: [
              {
                label: 'Inasistencias',
                data: [dataCantidad2[0]['0'], dataCantidad2[0]['1'], dataCantidad2[0]['2'], dataCantidad2[0]['3'], dataCantidad2[0]['4'], dataCantidad2[0]['5'], dataCantidad2[0]['6']],
                backgroundColor: ['rgba(39, 0, 255, 0.45)'],
                borderColor: ['rgba(39, 0, 255, 1)'],
                borderWidth: 1,
                borderRadius: 15
              },
              {
                label: 'Asistencias',
                data: [dataCantidad2[1]['0'], dataCantidad2[1]['1'], dataCantidad2[1]['2'], dataCantidad2[1]['3'], dataCantidad2[1]['4'], dataCantidad2[1]['5'], dataCantidad2[1]['6']],
                backgroundColor: ['rgba(255, 0, 140, 0.34)'],
                borderColor: ['rgba(255, 0, 140, 1)'],
                borderWidth: 1,
                borderRadius: 15
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      };
    });
    // this.RenderChart(this.logIngresosLista, this.logIngresosListaDias);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  // RenderChart(datos: logIngresosI[], dataDias: logIngresosDiasI[]) {
  //   console.log(this.logIngresosLista)
  //   console.log(datos);
  //   const meses = [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'August',
  //     'September',
  //     'October',
  //     'November',
  //     'December',
  //   ];
  //   const dias = [
  //     'Lunes',
  //     'Martes',
  //     'Miercoles',
  //     'Jueves',
  //     'Viernes',
  //     'Sabados',
  //     'Domingos',
  //   ];

  //   const piChart = new Chart('piChart', {
  //     type: 'radar',
  //     data: {
  //       labels: meses,
  //       datasets: [
  //         {
  //           label: 'Inasistencias',
  //           data: [datos[1]['January'], datos[1]['February'], datos[1]['March'], datos[1]['April'], datos[1]['May'], datos[1]['June'], datos[1]['July'], datos[1]['August'], datos[1]['September'], datos[1]['October'], datos[1]['November'], datos[1]['December']],
  //           backgroundColor: [
  //             'rgba(255, 99, 132, 0.2)',
  //             'rgba(54, 162, 235, 0.2)',
  //             'rgba(255, 206, 86, 0.2)',
  //             'rgba(75, 192, 192, 0.2)',
  //             'rgba(153, 102, 255, 0.2)',
  //             'rgba(255, 159, 64, 0.2)',
  //           ],
  //           borderColor: [
  //             'rgba(255, 99, 132, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)',
  //             'rgba(75, 192, 192, 1)',
  //             'rgba(153, 102, 255, 1)',
  //             'rgba(255, 159, 64, 1)',
  //           ],
  //           borderWidth: 1,
  //         },
  //         {
  //           label: 'Asistencias',
  //           data: [datos[0]['January'], datos[0]['February'], datos[0]['March'], datos[0]['April'], datos[0]['May'], datos[0]['June'], datos[0]['July'], datos[0]['August'], datos[0]['September'], datos[0]['October'], datos[0]['November'], datos[0]['December']],
  //           backgroundColor: [
  //             'rgba(255, 99, 132, 0.2)',
  //             'rgba(54, 162, 235, 0.2)',
  //             'rgba(255, 206, 86, 0.2)',
  //             'rgba(75, 192, 192, 0.2)',
  //             'rgba(153, 102, 255, 0.2)',
  //             'rgba(255, 159, 64, 0.2)',
  //           ],
  //           borderColor: [
  //             'rgba(255, 99, 132, 1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)',
  //             'rgba(75, 192, 192, 1)',
  //             'rgba(153, 102, 255, 1)',
  //             'rgba(255, 159, 64, 1)',
  //           ],
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  //   if (dataDias.length > 0) {
  //     const lineChart = new Chart('lineChart', {
  //       type: 'bar',
  //       data: {
  //         labels: dias,
  //         datasets: [
  //           {
  //             label: 'Inasistencias',
  //             data: [dataDias[0]['Lunes'], dataDias[0]['Martes'], dataDias[0]['Miercoles'], dataDias[0]['Jueves'], dataDias[0]['Viernes'], dataDias[0]['Sabado'], dataDias[0]['Domingo']],
  //             backgroundColor: ['rgba(39, 0, 255, 0.45)'],
  //             borderColor: ['rgba(39, 0, 255, 1)'],
  //             borderWidth: 1,
  //             borderRadius: 15
  //           },
  //           {
  //             label: 'Asistencias',
  //             data: [dataDias[1]['Lunes'], dataDias[1]['Martes'], dataDias[1]['Miercoles'], dataDias[1]['Jueves'], dataDias[1]['Viernes'], dataDias[1]['Sabado'], dataDias[1]['Domingo']],
  //             backgroundColor: ['rgba(255, 0, 140, 0.34)'],
  //             borderColor: ['rgba(255, 0, 140, 1)'],
  //             borderWidth: 1,
  //             borderRadius: 15
  //           },
  //         ],
  //       },
  //       options: {
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //           },
  //         },
  //       },
  //     });
  //   }
  // }
}

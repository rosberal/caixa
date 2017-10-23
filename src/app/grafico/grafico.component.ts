import { generate } from 'rxjs/observable/generate';
import { Component, OnInit, Input, DoCheck, AfterViewInit, OnChanges } from '@angular/core';
import { ViewChild, ElementRef, Directive } from '@angular/core';

import { Chart} from 'chart.js';
@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit, DoCheck, AfterViewInit, OnChanges  {
  // lineChart
@Input() listaDoGrafico: any;


  public lineChartData: Array<any>;
  // = [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}, ;
  public lineChartLabels: Array<any>; // = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    dataHora: Date[];
    valor: number[];
    baseChart: any;
//    @ViewChild('myCanvas') myCanvas: ElementRef;
//    public ctx: CanvasRenderingContext2D;



    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {

     // console.log('Lista do grafico', this.listaDoGrafico);
     // this.atualizaGrafico(this.listaDoGrafico);

/*     this.ctx = this.myCanvas.nativeElement.getContext('2d');
    this.baseChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],


           datasets: [{
              label: 'id1',
         data: [12, 19, 3, 5, 2, 3],

         backgroundColor: 'rgba(148,159,177,0.2)',
         borderColor: 'rgba(148,159,177,1)',
         pointBackgroundColor: 'rgba(148,159,177,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(148,159,177,0.8)',


         borderWidth: 1
          }]
    },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
 */
//console.log('Lista do grafico', this.listaDoGrafico);
//this.atualizaGrafico(this.listaDoGrafico);

  }
  ngDoCheck() {
  }
ngOnChanges() {
this.atualizaGraficoDados(this.listaDoGrafico);
// console.log('Lista do grafico', this.listaDoGrafico);

}

atualizaGraficoDados(lista) {
    this.valor = lista.map(resp => resp.valor);
   this.lineChartData = [{data: this.valor, label: 'id' }, ];
   this.lineChartLabels = [];
   setTimeout(() => this.lineChartLabels = this.atualizaGraficoLabel(this.listaDoGrafico), 500);
 
  // this.lineChartLabels = [];
}

atualizaGraficoLabel(label) {
 let d = new Date();
 let dataHoraNovo: any[] = [];
 let i: number;
 const dataHora = label.map(resp => resp.datahora);
 for (i = 0; i < dataHora.length; i++) {
d.setTime(dataHora[i]);

dataHoraNovo.push(d.toLocaleString());

}
 
 return dataHoraNovo;
}
/* forcaAtualizaGrafico() {
this.atualizaGrafico(this.listaDoGrafico);
console.log('basechart', this.baseChart);

//this.baseChart.update();

}
 */
}


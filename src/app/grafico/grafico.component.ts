import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  // lineChart
@Input() listaDoGrafico: any;


  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
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
    datahora: Date[];
    valor: number[];

  constructor() { }

  ngOnInit() {
  
    console.log('Lista do grafico', this.listaDoGrafico);
   // this.atualizaGrafico(this.listaDoGrafico);
  }

atualizaGrafico(lista) {
    this.datahora = lista.map(resp => resp.datahora);
    this.valor = lista.map(resp => resp.valor);
  this.lineChartData = this.valor;
  this.lineChartLabels = this.datahora;
// this.lineChartData.label = 'Serie A'
}

}

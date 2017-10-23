import { Component, OnChanges, OnInit } from '@angular/core';
import { ColocaDadosBancoComponent } from './coloca-dados-banco/coloca-dados-banco.component';
import { PegaDadosBancoComponent } from './pega-dados-banco/pega-dados-banco.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'app';
valor1: number;
corbg1: string;
cor1: string;
acao1: string;
datahora: number;
teste: any;
listaDoPai: any;
constructor() {

}

ngOnInit() {
//  this.valor1 = Math.round((Math.random() * 100) + 1);

}

ngOnChanges() {
}

onMudouLista(lista) {
this.listaDoPai = lista;
  console.log('lista do pai', lista);

let ultimo = this.listaDoPai.map(resp => resp.valor);
this.valor1 = ultimo[ultimo.length - 1];
console.log('valor1',this.valor1);
this.corbg1 = (this.valor1 > 50) ? 'bg-success' : 'bg-danger';
this.cor1 = (this.valor1 > 50) ? 'text-primary' : 'text-danger';
this.acao1 = (this.valor1 > 50) ? 'Valor acima da meta' : 'Valor abaixo da meta';
ultimo = this.listaDoPai.map(resp => resp.datahora);
this.datahora = ultimo[ultimo.length - 1];
}





}

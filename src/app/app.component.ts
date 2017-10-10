import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
valor1: number;
valor2: number;
cor1: string;
cor2: string;
acao1: string;
acao2: string;
datahora: number;
ngOnInit() {
  this.valor1 = Math.round((Math.random() * 100) + 1);
  this.valor2 = Math.round((Math.random() * 100) + 1);

  this.cor1 = (this.valor1 > 50) ? 'bg-success' : 'bg-danger';
  this.cor2 = (this.valor2 > 50) ? 'bg-success' : 'bg-danger';
this.acao1 = (this.valor1 > 50) ? 'Valor acima da meta' : 'Valor abaixo da meta';
this.acao2 = (this.valor2 > 50) ? 'Valor acima da meta' : 'Valor abaixo da meta';
  this.datahora = Date.now();

}


}

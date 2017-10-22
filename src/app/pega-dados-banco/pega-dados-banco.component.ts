import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pega-dados-banco',
  templateUrl: './pega-dados-banco.component.html',
  styleUrls: ['./pega-dados-banco.component.css']
})
export class PegaDadosBancoComponent implements OnInit {
  items: Observable<any[]>;

  @Output() mudouLista = new EventEmitter();

  constructor(private db: AngularFireDatabase) {}
  ngOnInit() {
    this.items = this.db.list('tupla').valueChanges();
    this.items.subscribe(dados => {

      this.mudouLista.emit(dados);

    });
  }

  atualizaDados() {
    console.log('lista de retorno', this.items);

    // this.items.map(dados => console.log('dados', dados));

    /*
  this.http
  .get(`//viacep.com.br/ws/${cep}/json/`)
  .map(dados => dados.json())
  .subscribe(dados => this.populaDadosForm(dados, form)); */
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pega-dados-banco',
  templateUrl: './pega-dados-banco.component.html',
  styleUrls: ['./pega-dados-banco.component.css']
})
export class PegaDadosBancoComponent implements OnInit {

  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {

  }
  ngOnInit() {
  }


  atualizaDados(){
    this.items = this.db.list('tupla').valueChanges();
    console.log('lista de retorno', this.items);
  
  }

}





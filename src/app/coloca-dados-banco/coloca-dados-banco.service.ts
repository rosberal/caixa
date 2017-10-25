import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ColocaDadosBancoService {

  constructor(private angularFire: AngularFireDatabase) { }


colocaDados() {
 const  tupla1: any = {
  idDispositivo: 1,
  datahora:  Date.now(),
  valor:  Math.round((Math.random() * 100) + 1),
  };
  
    console.log('tupla1', tupla1);

  this.angularFire.list('tupla').push(tupla1).then(
    (t: any) => console.log('dados gravados: ' + t.key),
    (e: any) => console.log(e.message));

}

deletaTodosDados() {

  this.angularFire.list('tupla').remove();

}

 deletaUltimoDado() {
this.angularFire.list('tupla').snapshotChanges().subscribe(dados => {
  console.log('ultimodado', dados);
  console.log('ultimomesmo', dados[dados.length - 1]);
  console.log('ultimomesmo', dados[ dados.length - 1 ].key);
  this.angularFire.list('tupla').remove(dados[ dados.length - 1 ].key)
});

}
}
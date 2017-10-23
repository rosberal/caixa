import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

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


}

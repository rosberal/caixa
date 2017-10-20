import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PegaDadosBancoComponent } from './pega-dados-banco.component';
import {AngularFireDatabase} from 'angularfire2/database';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PegaDadosBancoComponent],
  exports: [PegaDadosBancoComponent],
  providers: [AngularFireDatabase]
})
export class PegaDadosBancoModule {}


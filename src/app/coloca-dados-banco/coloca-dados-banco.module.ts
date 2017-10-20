
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColocaDadosBancoService } from './coloca-dados-banco.service';
import {AngularFireDatabase} from 'angularfire2/database';
import { ColocaDadosBancoComponent } from './coloca-dados-banco.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ColocaDadosBancoComponent],
  providers: [ColocaDadosBancoService, AngularFireDatabase],
exports: [ColocaDadosBancoComponent],

})
export class ColocaDadosBancoModule { }

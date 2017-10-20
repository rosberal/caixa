import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { GraficoComponent } from './grafico.component';

@NgModule({
  imports: [
    CommonModule, ChartsModule
  ],
  declarations: [GraficoComponent],
  exports: [GraficoComponent],

})
export class GraficoModule { }

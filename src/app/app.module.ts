
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { ColocaDadosBancoModule } from './coloca-dados-banco/coloca-dados-banco.module';
import { GraficoModule } from './grafico/grafico.module';
import { PegaDadosBancoModule } from './pega-dados-banco/pega-dados-banco.module';


@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    ColocaDadosBancoModule,
    PegaDadosBancoModule,
    GraficoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




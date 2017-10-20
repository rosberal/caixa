import { PegaDadosBancoModule } from './pega-dados-banco/pega-dados-banco.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { ColocaDadosBancoModule } from './coloca-dados-banco/coloca-dados-banco.module';
import { GraficoComponent } from './grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    ColocaDadosBancoModule,
    PegaDadosBancoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




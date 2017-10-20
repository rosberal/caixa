import { Component, OnInit } from '@angular/core';
import { ColocaDadosBancoService } from './coloca-dados-banco.service';

@Component({
  selector: 'app-coloca-dados-banco',
  templateUrl: './coloca-dados-banco.component.html',
  styleUrls: ['./coloca-dados-banco.component.css']
})
export class ColocaDadosBancoComponent implements OnInit {

  constructor(private coloca: ColocaDadosBancoService) { }

  ngOnInit() {
  }


chamaColocaDados(){
  this.coloca.colocaDados();
}

}

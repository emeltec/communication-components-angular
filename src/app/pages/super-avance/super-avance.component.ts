import { Component, OnInit } from '@angular/core';
import { SuperAvanceService } from './super-avance.service';

@Component({
  selector: 'app-super-avance',
  templateUrl: './super-avance.component.html',
})
export class SuperAvanceComponent implements OnInit {

  
  datoPrincipal = {
    sae:'12000',
    ae: '15000',
  }

  constructor(
    public saeService: SuperAvanceService
  ) { }

  ngOnInit() {
  }

  returnSimulator(){
    this.saeService.currentStep = 1
  }

chageTipoEfectivo(tipo){
  console.log(tipo)
  this.saeService.TIPO = tipo
  if(tipo=='SAE'){
    this.saeService.efDisponible = this.datoPrincipal.sae
  }
  if(tipo=='AE'){
    this.saeService.efDisponible = this.datoPrincipal.ae
  }
}

}
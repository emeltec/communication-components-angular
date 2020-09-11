import { Component, OnInit } from '@angular/core';
import { SuperAvanceService } from './super-avance.service';

@Component({
  selector: 'app-super-avance',
  templateUrl: './super-avance.component.html',
})
export class SuperAvanceComponent implements OnInit {

  constructor(
    public saeService: SuperAvanceService
  ) { }

  ngOnInit() {
  }

  returnSimulator(){
    this.saeService.currentStep = 1
  }

}
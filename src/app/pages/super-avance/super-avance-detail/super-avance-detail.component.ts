import { Component, OnInit, Host, Input } from '@angular/core';
import { SuperAvanceService } from '../super-avance.service';
import { SuperAvanceComponent } from '../super-avance.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-super-avance-detail',
  templateUrl: './super-avance-detail.component.html',
})
export class SuperAvanceDetailComponent implements OnInit {

  @Input() datos

  currentStep = 1;

  constructor(
    public saeServ: SuperAvanceService,
    @Host() public _avance: SuperAvanceComponent,
  ) {  }

  ngOnInit() {
    console.log(this._avance)
    console.log(this.datos)

  }

  changeInfo(){
    setTimeout( ()=>{
      this.saeServ.dataInfo ="HOLAAA COMO ESTAS?"
    },1000)
  }

  submitForm1(){
    this.changeStep(2)
  }

  submitForm2(){
    this.changeStep(3)
  }

  changeStep(step:number){
  this.currentStep = step;
  this.saeServ.currentStep = step;
  }

  returnSimulator(){
    this.changeStep(1)
  }

  Cambio(){
    this._avance.saeService.dataInfo = "New info for you."
  }

}
import { Component, VERSION } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  cuotaMin = 12
  cuotaMax = 24
  cuotas = 12


  constructor(
    private formBuilder: FormBuilder,
  ){
    
  }


  increment(){
    this.cuotas = this.cuotas +1
    console.log(this.cuotas)
  }

  decrement(){
    this.cuotas = this.cuotas -1
    console.log(this.cuotas)
  }

  bloquearRango(){
    if(this.cuotas > this.cuotaMax){
      this.cuotas = this.cuotaMax
    }
    if(this.cuotas < this.cuotaMin){
      this.cuotas = this.cuotaMin
    }
  }



 
  
}

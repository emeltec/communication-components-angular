import { Component, OnInit } from '@angular/core';
import { datos } from '../shared/dato-plazos'

@Component({
  selector: 'app-increment-decrement',
  templateUrl: './increment-decrement.component.html',
  styleUrls: ['./increment-decrement.component.css']
})
export class IncrementDecrementComponent implements OnInit {

  
  plazoMin = 12
  plazoMax = 24
  plazoSelected = 12

  plazosList = []

  constructor() { }

  ngOnInit() {
    datos.PlanSae.forEach(a => {
      this.plazosList.push(a.plazo)
    });
    console.log(this.plazosList)
    this.plazoMax = this.plazosList[this.plazosList.length -1 ]
    this.plazoMin = this.plazosList[0]
    this.plazoSelected = this.plazosList[this.plazosList.length -1 ]
    console.log(this.plazosList.length-1)
  }

  increment(){
    let index = this.plazosList.indexOf(this.plazoSelected)
    console.log(index)
    this.plazoSelected = this.plazosList[index + 1]
    console.log(this.plazoSelected)
  }

  decrement(){
    let index = this.plazosList.indexOf(this.plazoSelected)
    console.log(index)
    this.plazoSelected = this.plazosList[index - 1]
    console.log(this.plazoSelected)
  }

  bloquearRango(){
    if(this.plazoSelected > this.plazoMax){
      this.plazoSelected = this.plazoMax
    }
    if(this.plazoSelected < this.plazoMin){
      this.plazoSelected = this.plazoMin
    }
    if(this.plazosList.indexOf(this.plazoSelected ) == -1){
      alert("Plazo: "+ this.plazoSelected  + " No existe.")
      this.plazoSelected = this.plazoMax
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-enviar-otp',
  templateUrl: './enviar-otp.component.html',
  styleUrls: ['./enviar-otp.component.css']
})
export class EnviarOtpComponent implements OnInit {

  otpEnviado: boolean = false
  timeOtp:number = 10
  interval: Subscription

  constructor() { }

  ngOnInit(): void {
  }

  changeTerms(event){
    console.log(event)
    if(event.checked){
      this.otpEnviado = true;
      this.countTimeOtp();
    }
  }

  countTimeOtp(){
    this.interval = interval(1000).subscribe( () => {
      if(this.timeOtp > 0){
        this.timeOtp -= 1
      } else if(this.timeOtp == 0){
        this.otpEnviado = false;
        this.timeOtp = 10;
        this.interval.unsubscribe();
      }
    })
  }

}

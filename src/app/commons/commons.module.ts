import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviarOtpComponent } from './enviar-otp/enviar-otp.component';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    EnviarOtpComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
  ],
  exports: [
    EnviarOtpComponent
  ]
})
export class CommonsModule { }

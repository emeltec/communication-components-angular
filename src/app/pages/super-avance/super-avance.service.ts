import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class SuperAvanceService {

  public dataInfo = "This is my first info."
  public currentStep = 1

  constructor() {  }

}
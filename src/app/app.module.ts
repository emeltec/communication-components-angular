import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuperAvanceComponent } from './pages/super-avance/super-avance.component';
import { SuperAvanceDetailComponent } from './pages/super-avance/super-avance-detail/super-avance-detail.component';
import { SuperAvanceService } from './pages/super-avance/super-avance.service';
import { IncrementDecrementComponent } from './increment-decrement/increment-decrement.component';
import { MatCheckboxModule } from '@angular/material/checkbox'


@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  declarations: [	 
    AppComponent, 
    SuperAvanceComponent, 
    SuperAvanceDetailComponent,
    IncrementDecrementComponent
   ],
  bootstrap:    [ AppComponent ],
  providers: [SuperAvanceService]
})
export class AppModule { }

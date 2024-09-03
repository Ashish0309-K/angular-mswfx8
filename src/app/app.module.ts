import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SeatReservationComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ SeatReservationComponent, HelloComponent ],
  bootstrap:    [ SeatReservationComponent ]
})
export class AppModule { }
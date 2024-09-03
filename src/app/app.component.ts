import { Component } from '@angular/core';

export class AppModule { }


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class SeatReservationComponent {
  seats: { seatNumber: number; isBooked: boolean }[][];

  constructor() {
    // Initialize seats
    this.seats = [];
    let seatNumber = 1;

    for (let i = 0; i < 11; i++) {
      // First 10 rows with 7 seats
      if (i < 10) {
        this.seats.push(
          Array.from({ length: 7 }, () => ({ seatNumber: seatNumber++, isBooked: false }))
        );
      } else {
        // Last row with 3 seats
        this.seats.push(
          Array.from({ length: 3 }, () => ({ seatNumber: seatNumber++, isBooked: false }))
        );
      }
    }
  }

  bookSeats(requiredSeats: number): number[] {
    let bookedSeats: number[] = [];

    for (let row of this.seats) {
      const availableSeats = row.filter(seat => !seat.isBooked);
      if (availableSeats.length >= requiredSeats) {
        for (let i = 0; i < requiredSeats; i++) {
          availableSeats[i].isBooked = true;
          bookedSeats.push(availableSeats[i].seatNumber);
        }
        return bookedSeats;
      }
    }

    for (let row of this.seats) {
      const availableSeats = row.filter(seat => !seat.isBooked);
      for (let seat of availableSeats) {
        if (bookedSeats.length < requiredSeats) {
          seat.isBooked = true;
          bookedSeats.push(seat.seatNumber);
        } else {
          return bookedSeats;
        }
      }
    }

    return bookedSeats;
  }

  onBookSeats(seats: number): void {
    const booked = this.bookSeats(seats);
    alert(`Seats booked: ${booked.join(', ')}`);
  }
}
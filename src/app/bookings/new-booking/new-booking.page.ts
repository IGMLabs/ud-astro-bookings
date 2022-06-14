import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingsApi } from '../../core/api/bookings.api';
import { TripsApi } from '../../core/api/trips.api';
import { Trip } from '../../core/api/trip.interface';
import { Booking } from '../../core/api/booking.interface';

@Component({

  templateUrl: './new-booking.page.html',
  styleUrls: ['./new-booking.page.css']
})
export class NewBookingPage implements OnInit {

  public trips$: Observable<Trip[]>;

  constructor( tripsApi: TripsApi, private bookingsApi: BookingsApi, private router: Router) {

    this.trips$ = tripsApi.getAll$();
  }

  onSubmitSave(newBookingData:Booking) {
    // Para que haga un post de verdad hay que meterle el .subscribe()

    this.bookingsApi.post$(newBookingData).subscribe(()=> {
      this.router.navigate(['/bookings']);
    });
  }

  ngOnInit(): void {
  }

}


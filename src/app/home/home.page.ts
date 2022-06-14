import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Booking } from '../core/api/booking.interface';
import { BookingsApi } from '../core/api/bookings.api';
import { Trip } from '../core/api/trip.interface';

import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  public trips$: Observable<Trip[]>;
  public agencies$: Observable<Agency[]>;
  public bookings$: Observable<Booking[]>;

  public reloading = false;

  constructor(tripsApi: TripsApi, private agenciesApi: AgenciesApi, bookingsApi: BookingsApi) {
    this.trips$ = tripsApi.getAll$();
    this.agencies$ = agenciesApi.getAll$();
    this.bookings$ = bookingsApi.getAll$();
   }

  ngOnInit(): void {
  }

  onReload(){
    this.agencies$ = this.agenciesApi.getAll$();
  }
}

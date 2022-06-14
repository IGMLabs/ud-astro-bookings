import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from '../../core/api/booking.interface';
import { BookingsApi } from '../../core/api/bookings.api';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.css']
})
export class BookingPage implements OnInit {

  public bookingId: string;
  public booking$: Observable<Booking>;

  constructor( route:ActivatedRoute, bookingsApi: BookingsApi ) {
    this.bookingId = route.snapshot.paramMap.get('id') || '';
    this.booking$ = bookingsApi.getById$(this.bookingId);

   }

  ngOnInit(): void {
  }

}

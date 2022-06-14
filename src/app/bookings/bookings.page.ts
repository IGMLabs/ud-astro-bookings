import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingsApi } from '../core/api/bookings.api';
import { Booking } from '../core/api/booking.interface';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.css']
})
export class BookingsPage implements OnInit {


  public bookings$: Observable<Booking[]>;
  public error: boolean = false;


   constructor( private bookingsApi: BookingsApi ) {

   this.bookings$ = this.bookingsApi.getAll$();
   }



  onReload(){
    this.bookings$ = this.bookingsApi.getAll$();
  }

    ngOnInit(): void {
    }

  }

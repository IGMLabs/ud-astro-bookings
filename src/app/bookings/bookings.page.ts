import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
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
  private search$: BehaviorSubject<string> = new BehaviorSubject('');


   constructor( private bookingsApi: BookingsApi ) {

    this.bookings$ = this.search$.pipe(
      switchMap((searchTerm) => this.bookingsApi.getByText$(searchTerm))

    );
   }

  onReload(){
    this.bookings$ = this.bookingsApi.getAll$();
  }

  onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
    // this.agencies$ = this.agenciesApi.getByText$(searchTerm);
  }

  ngOnInit(): void {
  }

  }

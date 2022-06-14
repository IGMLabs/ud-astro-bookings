import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../core/api/booking.interface';

@Component({
  selector: 'app-booking-view',
  templateUrl: './booking.view.html',
  styleUrls: ['./booking.view.css']
})
export class BookingView implements OnInit {

  @Input() public bookingId!: string;
  @Input() public booking!: Booking;

  constructor() { }

  ngOnInit(): void {
  }

}

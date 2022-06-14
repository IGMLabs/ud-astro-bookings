import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Booking } from 'src/app/core/api/booking.interface';


@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings.list.html',
  styleUrls: ['./bookings.list.css']
})
export class BookingsList implements OnInit {
 // Con el input indicamos que las agencias le viene de fuera(agencies.page)
  // Movi el constructor de aqui al agencies.page.ts
  @Input() public bookings: Booking[] = [];

  @Output() private reload = new EventEmitter();


  public reloading = false;

  public onReloadClick(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
    // Para indicarle al padre que lo haga
    this.reload.emit();
  }

  public getBookingsLength() {
    return this.bookings.length;
  }

  ngOnInit(): void {}
}

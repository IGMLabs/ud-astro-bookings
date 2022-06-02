import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.css']
})
export class TripPage implements OnInit {

  public tripId : string;

  constructor(route: ActivatedRoute) {
    this.tripId = route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
  }

}

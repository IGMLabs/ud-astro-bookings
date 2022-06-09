import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.css']
})
export class NewTripPage implements OnInit {

  public agencies: Agency[]= [];

  constructor(agenciesApi: AgenciesApi, private tripsApi: TripsApi, private router: Router) {
    agenciesApi.getAll().subscribe( (data) => {this.agencies = data});
  }

  ngOnInit(): void {
  }

  onSave(newTripData: Trip){
    this.tripsApi.post(newTripData);
    this.router.navigate(['/trips']);
  }
}

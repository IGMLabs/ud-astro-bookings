import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject, switchMap, map } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css']
})
export class AgenciesPage implements OnInit {

  //public agencies!: Agency[];
  public agencies$: Observable<Agency[]>
  public error: boolean = false;
  private search$: BehaviorSubject<string> = new BehaviorSubject('');
  public trips$!: Observable<Trip[]>;


  constructor(private agenciesApi: AgenciesApi, private route: ActivatedRoute, private tripsApi: TripsApi) {
    //this.agenciesApi.getAll$().subscribe(this.suscriptor);

    this.agencies$ = this.search$.pipe(
      // map((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      switchMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      // concatMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      // exhaustMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
    );

    route.queryParamMap.subscribe(queryParamMap =>{
      const agencyId = queryParamMap.get('q');
      this.trips$ = this.tripsApi.getByText$(agencyId);
    });

    this.trips$ = this.route.queryParamMap.pipe(
      map((qpm) => qpm.get('q')),
      switchMap((agencyId) =>
        this.trips$ = this.tripsApi.getByText$(agencyId)
      )
    )

  }

  ngOnInit(): void {
  }

  onReload(){
    this.search$.next('');
  }

  onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
    // this.agencies$ = this.agenciesApi.getByText$(searchTerm);
  }


}

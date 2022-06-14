import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css']
})
export class AgenciesPage implements OnInit {

  //public agencies!: Agency[];
  public agencies$: Observable<Agency[]>
  public error: boolean = false;


  constructor(private agenciesApi: AgenciesApi) {
    //this.agenciesApi.getAll$().subscribe(this.suscriptor);
    this.agencies$ = this.agenciesApi.getAll$();
  }

  ngOnInit(): void {
  }

  onReload(){
    this.agenciesApi.getAll$().subscribe((data) => {

    },
    (err) => {
      console.log('Hay un fallo');
      this.error = true;
    });
  }

}

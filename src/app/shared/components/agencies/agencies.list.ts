import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css']
})
export class AgenciesList implements OnInit {

  public agencies = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ];

  public reloading = false;

  public getAgenciesLength(){
    return this.agencies.length;
  }

  public reload(list: string){
    this.reloading = true;
    console.log("Reloading..." + list);
  }



  constructor() { }

  ngOnInit(): void {
  }

}

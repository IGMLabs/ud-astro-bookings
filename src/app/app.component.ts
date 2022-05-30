import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ud-astro-bookings';
  public subtitle = 'welcome on board';
  public author = 'udp';
  public authorUrl = 'https://picocss.com/docs/';
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

  public getAgenciesLength(){
    return this.agencies.length;
  }
  public reload (){
    this.reloading=true;
    console.log ("Reloading");
  }
  public reloading =false;
}

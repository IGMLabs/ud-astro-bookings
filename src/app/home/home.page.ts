import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  public title = 'Astro Bookings';
  public subtitle = 'Welcome on board';
  public author = 'Uxia Diaz';
  public authorUrl = 'https://picocss.com/docs/';


  public reloading = false;

  constructor() { }

  ngOnInit(): void {
  }

}

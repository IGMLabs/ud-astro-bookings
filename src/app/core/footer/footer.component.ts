import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public title = 'Astro Bookings';
  public subtitle = 'Welcome on board';
  public author = 'Udp';
  public authorUrl = 'https://picocss.com/docs/';

  constructor() { }

  ngOnInit(): void {
  }

}

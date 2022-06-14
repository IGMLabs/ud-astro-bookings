import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.control.html',
  styleUrls: ['./search.control.css']
})
export class SearchControl implements OnInit {

  @ViewChild("searchInput", {static: true}) public searchInput!: ElementRef;
  @Output() search = new EventEmitter<string>();

  public searchInput$!: Observable<String>
  constructor() { }

  ngOnInit(): void {
    this.searchInput$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: unknown )=>{
        return ( event as any ).target.value;
      }),
      tap((searchTerm)=>{

      }),
      debounceTime(1000),
      tap((searchTerm)=>{

      }),
      filter((searchText) => searchText.length > 2),
      distinctUntilChanged(),
      tap((searchTerm: string)=> this.search.emit(searchTerm))
    );
  }

}

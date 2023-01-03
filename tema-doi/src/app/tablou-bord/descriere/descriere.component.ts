import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-descriere',
  templateUrl: './descriere.component.html',
  styleUrls: ['./descriere.component.css']
})
export class DescriereComponent implements OnInit, OnChanges {
  @Input()card:any;    //acest 'card' este un elem. ce va primi cv de la partinti

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    console.log(this.card);  //se apeleaza de fiecare data cand aceasta comp. primeste nou input
  }

}

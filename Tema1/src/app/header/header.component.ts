import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  displayPic: boolean = false;
  // title2 = 'Prima tema 1';
  showPic(){
    this.displayPic = !this.displayPic;
  }
}

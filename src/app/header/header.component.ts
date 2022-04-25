import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: { '(document:click)': 'onClickOutside()' },
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  wasInside = false;

  constructor() {}

  ngOnInit(): void {}

  onDropdown() {
    this.isOpen = !this.isOpen;
    this.wasInside = true;
  }

  onClickOutside() {
    if (!this.wasInside) {
      this.isOpen = false;
    }
    this.wasInside = false;
  }
}

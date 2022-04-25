import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('dropdown', { static: true }) dropdown: ElementRef;
  isOpen = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  onDropdown() {
    if (!this.isOpen) {
      this.renderer.addClass(this.dropdown.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.dropdown.nativeElement, 'show');
    }
    this.isOpen = !this.isOpen;
  }
}

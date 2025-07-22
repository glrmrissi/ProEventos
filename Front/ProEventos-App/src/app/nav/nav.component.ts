import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO: place collapse module for navigation

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [CommonModule]
})
export class NavComponent implements OnInit, AfterViewInit {
  isCollapsedNav: boolean = false;
  
  @ViewChild('navbarNav') navbarNav!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  collapseNav() {
    this.isCollapsedNav = !this.isCollapsedNav;
    if (this.isCollapsedNav) {
      this.navbarNav.nativeElement.classList.add('show');
    } else {
      this.navbarNav.nativeElement.classList.remove('show');
    }
  }
}

import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pageYoffset = 0;
  
  @HostListener('window:scroll', ['$event']) onScroll(){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
    
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  title = 'Jyoti Technosoft LLP';
  section: string = 'home';

  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {
    this.section = localStorage.getItem('item') || 'home';
    this.showSection(this.section);
  }

  showSection(event: string) {
    this.section = event;
    if (event == 'about' || event == 'contacts' || event == 'home') {
      this.scroller.setOffset([0, 60]);
    } else {
      this.scroller.setOffset([0, 10]);
    }
    setTimeout(() => {
      this.scroller.scrollToAnchor(event);
    }, 50);
  }
}

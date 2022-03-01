import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  title = 'Jyoti Technosoft';
  section: string = '';

  constructor(
  private scroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  showSection(event: any) {
    this.section = event;
    this.scroller.scrollToAnchor(event);
  }
}

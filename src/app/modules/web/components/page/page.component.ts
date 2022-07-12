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
  public item : any = '';
  constructor(
  private scroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('item')){
      this.item = localStorage.getItem('item')
      this.showSection(this.item)
      localStorage.removeItem('item')
    }
  }
    
  showSection(event: string) {
    this.section = event;
    if(event == 'about' || event == 'contacts' || event == 'home') {
      this.scroller.setOffset([0, 60])
    } else {
      this.scroller.setOffset([0, 10])
    }
    setTimeout(() => {
      this.scroller.scrollToAnchor(event);
    }, 50)
  }
}

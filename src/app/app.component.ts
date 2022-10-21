import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2,) {  }

  ngAfterViewInit() {
    this.renderer.setStyle(document.getElementById('preloader'), 'display', 'none');
  }

}

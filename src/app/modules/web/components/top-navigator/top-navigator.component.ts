import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import data from '../../../../../assets/data/JT-website-json-data.json';

@Component({
  selector: 'app-top-navigator',
  templateUrl: './top-navigator.component.html',
  styleUrls: ['./top-navigator.component.scss']
})
export class TopNavigatorComponent implements OnInit {

  @Output() showSection = new EventEmitter<string>();
  logo: any = data.topnavigator[0].logoimage;
  
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  goDown(section: string) {
    if(this.router.url.includes('/gallery')){
      this.router.navigate(['/'])
      localStorage.setItem('item',section)
    }
    this.showSection.emit(section);
  }
}

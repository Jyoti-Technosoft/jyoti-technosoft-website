import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import data from '../../../../assets/data/JT-website-json-data.json';
import { Router } from '@angular/router';
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
    if(this.router.url == '/gallery'){
      this.router.navigate(['/'])
      localStorage.setItem('item',section)
    }
    this.showSection.emit(section);
  }
}

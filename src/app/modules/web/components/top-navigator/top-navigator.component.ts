import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-navigator',
  templateUrl: './top-navigator.component.html',
  styleUrls: ['./top-navigator.component.scss']
})
export class TopNavigatorComponent implements OnInit {

  @Output() showSection = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goDown(section: string) {
    this.showSection.emit(section);
  }
}

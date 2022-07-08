import { Component, OnInit } from '@angular/core';
import data from '../../../../assets/data/JT-website-json-data.json';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  contents: any = data.Services[0].contents;
  tab1: any = data.Services[0].tabs.tab1;
  tab2: any = data.Services[0].tabs.tab2;
  tab3: any = data.Services[0].tabs.tab3;
  constructor() { }

  ngOnInit(): void {
  }

}

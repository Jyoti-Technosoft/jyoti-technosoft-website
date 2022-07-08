import { Component, OnInit, Input } from '@angular/core';
import data from '../../../../assets/data/JT-website-json-data.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() section: string = '';

  content: any = data.aboutus[0].content;
  card1: any = data.aboutus[0].cards.card1;
  card2: any = data.aboutus[0].cards.card2;
  card3: any = data.aboutus[0].cards.card3;
  valuecard: any = data.aboutus[0].valueCard;
  subContent1: any = data.aboutus[0].subContent1;
  subContent2: any = data.aboutus[0].subContent2;
  subContent3: any = data.aboutus[0].subContent3;
  subContent4: any = data.aboutus[0].subContent4;
  subContent5: any = data.aboutus[0].subContent5;

  constructor() { }

  ngOnInit(): void {
  }

}

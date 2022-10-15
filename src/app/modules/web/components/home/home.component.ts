import { Component, OnInit } from '@angular/core';

import data from '../../../../../assets/data/JT-website-json-data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imagesUrl: any = [];
  card1 :any = data.home[0].sliders.slide1;
  card2 : any = data.home[0].sliders.slide2;
  card3 : any = data.home[0].sliders.slide3;
  card4 : any = data.home[0].sliders.slide4;
  sliderimage: any = data.home[0].sliders.sliderimage;
  image: any = data.home[0].sliders.image;
  images = [ 
    { title: 'Jyoti Technosoft', subtitle: 'Delivering Range Of Solutions', content: 'Jyoti Technosoft is a Surat-based company delivering top of the line services to clients when it comes to web development, open source customization, custom software development services.' },
    { title: 'Complete Web Solutions', subtitle: 'Graphics / Web Design / Web Application', content: 'Responsive Designs' },
    { title: 'Mobile Application Development', subtitle: 'Native App / Cross Platform Application Development', content: '' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.imagesUrl = [
      { image: 'assets/client/progressmaker.png', thumbImage: 'assets/progressmaker-new-logo-single.png',top:"30",margin:"margin-top:9px",width:"200", title: '' },
      { image: 'assets/client/biztree.png', thumbImage: 'assets/client/biztree.png', top:"50", margin:"margin-bottom:6px", width:"150", title: '' },
      { image: 'assets/client/boatgroup.png', thumbImage: 'assets/client/boatgroup.png',top:"50",margin:"",width:"150", title: '' },
      { image: 'assets/client/cx-group.png', thumbImage: 'assets/client/cx-group.png', top:"50",margin:"",width:"150", title: '' },
      { image: 'assets/client/enteros.png', thumbImage: 'assets/client/enteros.png',top:"50",margin:"", width:"150",title: '' },
      { image: 'assets/client/oxos.png', thumbImage: 'assets/client/oxos.png',top:"50",margin:"", width:"150", title: '' },
      { image: 'assets/client/tlc.png', thumbImage: 'assets/client/tlc.png',top:"50",margin:"", width:"150",title: '' },
    ];
  }

}

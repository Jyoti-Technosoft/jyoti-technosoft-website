import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imagesUrl: any = [];

  images = [ 
    { title: 'Jyoti Technosoft', subtitle: 'Delivering Range Of Solutions', content: 'Jyoti Technosoft is a Surat-based company delivering top of the line services to clients when it comes to web development, open source customization, custom software development services.' },
    { title: 'Complete Web Solutions', subtitle: 'Graphics / Web Design / Web Application', content: 'Responsive Designs' },
    { title: 'Mobile Application Development', subtitle: 'Native App / Cross Platform Application Development', content: '' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.imagesUrl = [
      { image: 'app/assets/client/biztree.png', thumbImage: 'app/assets/client/biztree.png', title: '' },
      { image: 'app/assets/client/boatgroup.png', thumbImage: 'app/assets/client/boatgroup.png', title: '' },
      { image: 'app/assets/client/cx-group.png', thumbImage: 'app/assets/client/cx-group.png', title: '' },
      { image: 'app/assets/client/enteros.png', thumbImage: 'app/assets/client/enteros.png', title: '' },
      { image: 'app/assets/client/oxos.png', thumbImage: 'app/assets/client/oxos.png', title: '' },
      { image: 'app/assets/client/tlc.png', thumbImage: 'app/assets/client/tlc.png', title: '' },
    ];
  }

}

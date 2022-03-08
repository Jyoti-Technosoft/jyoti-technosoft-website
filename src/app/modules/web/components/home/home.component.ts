import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imagesUrl: any = [];

  images = [ 
    { imagePath: 'app/assets/gallery_images/Camel.jpg' },
    { imagePath: 'app/assets/gallery_images/dog.jpg' },
    { imagePath: 'app/assets/gallery_images/Tiger.jpg' }
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

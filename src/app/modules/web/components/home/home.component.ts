import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [ 
    {imagePath: 'app/assets/gallery_images/Camel.jpg'},
    {imagePath: 'app/assets/gallery_images/dog.jpg'},
    {imagePath: 'app/assets/gallery_images/Tiger.jpg'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

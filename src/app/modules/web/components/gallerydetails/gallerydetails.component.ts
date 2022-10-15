import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallerydetails',
  templateUrl: './gallerydetails.component.html',
  styleUrls: ['./gallerydetails.component.scss']
})
export class GallerydetailsComponent implements OnInit {

  route: string = "";
  images: any = [{image: '/assets/celebrations/Diwali-2.jpg'}];
  celebrationImages: any = [{ 
      "SnacksGames": [
      "../../../assets/celebrations/Snacks-1.jpg",
      "../../../assets/celebrations/Snacks-2.jpg",
      "../../../assets/celebrations/Snacks-3.jpg",
      "../../../assets/celebrations/Snacks-4.jpg",
      "../../../assets/celebrations/Snacks-5.jpg",
      "../../../assets/celebrations/Snacks-6.jpg",
      "../../../assets/celebrations/Snacks-7.jpg",
      "../../../assets/celebrations/Snacks-8.jpg",
    ],
    "Birthday": [
      "../../../assets/celebrations/Bday-1.jpg",
      "../../../assets/celebrations/Bday-2.jpg",
      "../../../assets/celebrations/Bday-3.jpg",
      "../../../assets/celebrations/Bday-4.jpg",
      "../../../assets/celebrations/Bday-5.jpg",
      "../../../assets/celebrations/Bday-6.jpg",
      "../../../assets/celebrations/Bday-7.jpg",
      "../../../assets/celebrations/Bday-8.jpg",
      "../../../assets/celebrations/Bday-9.jpg",
      "../../../assets/celebrations/Bday-10.jpg",
      "../../../assets/celebrations/Bday-11.jpg",
      "../../../assets/celebrations/Bday-12.jpg",
    ],
    "Holi": [
      "../../../assets/celebrations/Holi-1.jpg",
      "../../../assets/celebrations/Holi-2.jpg",
      "../../../assets/celebrations/Holi-3.jpg",
      "../../../assets/celebrations/Holi-4.jpg",
      "../../../assets/celebrations/Holi-5.jpg",
    ],
    "Independence": [
      "../../../assets/celebrations/Independence-1.jpg",
      "../../../assets/celebrations/Independence-2.jpg",
    ],
    "Diwali": [
      "../../../assets/celebrations/Diwali-1.jpg",
      "../../../assets/celebrations/Diwali-2.jpg",
    ]
  }];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.route = params.image;
    })
  }

}

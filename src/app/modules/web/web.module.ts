import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCarouselModule } from 'ng-mat-carousel';
import { NgImageSliderModule } from 'ng-image-slider';

import { WebRoutingModule } from './web-routing.module';
import { PageComponent } from './components/page/page.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavigatorComponent } from './components/top-navigator/top-navigator.component';

@NgModule({
  declarations: [
    TopNavigatorComponent,
    FooterComponent,
    PageComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    NgImageSliderModule,
    WebRoutingModule,
    MatCarouselModule.forRoot()
  ]
})
export class WebModule { }

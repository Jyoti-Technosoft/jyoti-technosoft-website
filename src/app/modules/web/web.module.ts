import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { TopNavigatorComponent } from './components/top-navigator/top-navigator.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



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
    WebRoutingModule
  ]
})
export class WebModule { }

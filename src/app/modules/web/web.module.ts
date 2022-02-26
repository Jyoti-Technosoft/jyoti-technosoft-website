import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { TopNavigatorComponent } from './components/top-navigator/top-navigator.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';



@NgModule({
  declarations: [
    TopNavigatorComponent,
    FooterComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }

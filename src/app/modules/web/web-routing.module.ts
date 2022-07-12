import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GallerydetailsComponent } from './components/gallerydetails/gallerydetails.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  { path: '', component: PageComponent },
  { path :'gallery', component: GallerydetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebRoutingModule { }
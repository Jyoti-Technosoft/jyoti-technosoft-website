import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalaryComponent } from './components/galary/galary.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  { path: '', component: PageComponent },
  { path :'gallery', component: GalaryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';

const routes: Routes = [
  { path: '',
  component: WebLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./modules/web/web.module').then(m => m.WebModule),
      data: {}
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

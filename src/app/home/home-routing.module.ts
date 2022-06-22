import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },  {
    path: 'new-page',
    loadChildren: () => import('./new-page/new-page.module').then( m => m.NewPagePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes),SwiperModule],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

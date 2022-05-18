import { Component, OnInit, ViewChild } from '@angular/core';
import Swiper, { Pagination, SwiperOptions ,Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  config:SwiperOptions = {
    pagination: true,
    navigation: true,
    spaceBetween:50
  }
  @ViewChild('swiper') swiper: SwiperComponent;
  constructor() {}

  ngOnInit(): void {
    Swiper.use([Pagination,Navigation]);
  }

  onSwipe(event){
    console.log(event);
  }
  onSlideChange(){
    console.log("Slide Changed");
  }

  onClickNext(){
    if(this.swiper){
      this.swiper.swiperRef.slideNext(100);
    }
  }
  onClickPrev(){
    if(this.swiper){
      this.swiper.swiperRef.slidePrev(100);
    }
  }

}

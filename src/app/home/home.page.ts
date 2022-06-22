import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import Swiper, { Pagination, SwiperOptions, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { SwipeService } from './swipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('input') input;
  index = 0;
  config: SwiperOptions = {
    pagination: true,
    navigation: true,
    spaceBetween: 50,
  };
  @ViewChild('swiper') swiper;
  @ViewChild('slide2') slide2;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  @ViewChild('slides') slides: IonSlides;

  constructor(private swipeService: SwipeService) {}

  ngOnInit(): void {
    Swiper.use([Pagination, Navigation]);
    this.swipeService.swipeIndexSubject.subscribe(index=>{
      if(index){
        this.index = index;
      }
    })
  }

  onSwipe(event) {
    // console.log(this.slide2);
  }
  onSlideChange() {
    if (this.swiper.swiperRef.activeIndex === 1) {
      console.log(this.slide2);
      this.slide2.focusOnInput();
    }
  }
  ionViewWillEnter(){
    this.slides.slideTo(this.index,0).then(resp=>{
      console.log(resp)
  })
    // this.swiper.swiperRef.slideTo(this.index);
    // this.swipeService.changeSwipeIndex(0);
  }

  onClickNext() {
    if (this.swiper) {
      this.swiper.swiperRef.slideNext(100);
    }
  }
  onClickPrev() {
    if (this.swiper) {
      this.swiper.swiperRef.slidePrev(100);
    }
  }
}

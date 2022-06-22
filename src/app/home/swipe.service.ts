import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwipeService {

  private swipeIndex = 0;
  swipeIndexSubject = new BehaviorSubject<number>(this.swipeIndex);

  constructor() { }

  changeSwipeIndex(index: number){
    this.swipeIndexSubject.next(index);
  }
}

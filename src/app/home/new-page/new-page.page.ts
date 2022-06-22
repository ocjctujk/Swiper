import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SwipeService } from '../swipe.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit {
  backbutton;

  constructor(private platform:Platform,private navCtrl: NavController,private swipeService: SwipeService) { }

  ngOnInit() {
    this.platform.backButton.subscribe(() => {
      // do something here
      alert("back")

    });
  }

  ionViewDidEnter() {
    this.platform.backButton.subscribeWithPriority(9999, () => {
      // do on back button click
      alert("back")
     });

  }

  ionViewWillLeave() {
    this.platform.backButton.observers.push(this.backbutton);
  }

  redirectToSlide3(){
    this.swipeService.changeSwipeIndex(2);
    this.navCtrl.navigateBack("/home")
  }

}

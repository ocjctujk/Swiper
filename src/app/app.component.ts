import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  // landscape;
  ngOnInit(): void {

    // alert("Version 1")

    // screen.orientation.lock('portrait').then(
    //   success=> console.log(success),
    //   error=>console.log(error)
    // )
  //   this.checkOrientation()
  //   window.addEventListener("orientationchange", this.checkOrientation);
  }

  // checkOrientation(){
  //   console.log(window.screen.orientation);
  //     if(window.screen.orientation.type=='landscape-primary' ||window.screen.orientation.type=='landscape-secondary'){
  //       this.landscape = true;
  //     }
  //     else{
  //       this.landscape = false;
  //     }
  //     console.log(this.landscape);
  // }

}

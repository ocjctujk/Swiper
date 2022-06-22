import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  @ViewChild('inputElement') input;
  @ViewChild('inp') inp: ElementRef;

  constructor() {}

  ngOnInit() {}

  focusOnInput() {
    console.log('Focusing on inout');
    setTimeout(() => {
      // this.input.nativeElement.focus();
      // this.inp.nativeElement.focus();

     // console.log(this.inp.setFocus());
      // this.inp.focus();
    }, 500);

    // this.input.nativeElement.focus();
  }
}

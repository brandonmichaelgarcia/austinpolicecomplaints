import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page3Page } from '../page3/page3';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage3(){
    this.navCtrl.push(Page3Page);
  }
}

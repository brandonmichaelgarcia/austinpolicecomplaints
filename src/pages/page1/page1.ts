import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { Page4Page } from '../page4/page4';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage2(){
    this.navCtrl.push(Page2Page);
  }
  
  segueToPage4(){
    this.navCtrl.push(Page4Page);
  }
  
}

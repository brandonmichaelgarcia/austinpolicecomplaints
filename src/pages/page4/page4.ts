import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page5Page } from '../page5/page5';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage5(){
    this.navCtrl.push(Page5Page);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page8Page } from '../page8/page8';

@Component({
  selector: 'page-page7',
  templateUrl: 'page7.html'
})
export class Page7Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage8(){
    this.navCtrl.push(Page8Page);
  }
}

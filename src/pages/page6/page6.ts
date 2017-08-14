import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page7Page } from '../page7/page7';

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage7(){
    this.navCtrl.push(Page7Page);
  }
}

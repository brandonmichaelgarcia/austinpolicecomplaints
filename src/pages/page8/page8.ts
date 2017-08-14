import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page9Page } from '../page9/page9';

@Component({
  selector: 'page-page8',
  templateUrl: 'page8.html'
})
export class Page8Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage9(){
    this.navCtrl.push(Page9Page);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page12Page } from '../page12/page12';

@Component({
  selector: 'page-page11',
  templateUrl: 'page11.html'
})
export class Page11Page {

  constructor(public navCtrl: NavController) {
  }
  
  segueToPage12(){
      this.navCtrl.push(Page12Page);
    }
}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { Page4Page } from '../pages/page4/page4';
import { Page5Page } from '../pages/page5/page5';
import { Page6Page } from '../pages/page6/page6';
import { Page7Page } from '../pages/page7/page7';
import { Page8Page } from '../pages/page8/page8';
import { Page9Page } from '../pages/page9/page9';
import { Page10Page } from '../pages/page10/page10';
import { Page11Page } from '../pages/page11/page11';
import { Page12Page } from '../pages/page12/page12';
import { Page13Page } from '../pages/page13/page13';
import { Page14Page } from '../pages/page14/page14';
import { Page15Page } from '../pages/page15/page15';
import { Page16Page } from '../pages/page16/page16';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page,
    Page6Page,
    Page7Page,
    Page8Page,
    Page9Page,
    Page10Page,
    Page11Page,
    Page12Page,
    Page13Page,
    Page14Page,
    Page15Page,
    Page16Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page,
    Page6Page,
    Page7Page,
    Page8Page,
    Page9Page,
    Page10Page,
    Page11Page,
    Page12Page,
    Page13Page,
    Page14Page,
    Page15Page,
    Page16Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
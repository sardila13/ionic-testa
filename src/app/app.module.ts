import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeDetailPage } from '../pages/homedetail/homedetail';
import { DataProvider } from '../providers/dataprovider/dataprovider';
import { LayoutSwitcherDirective } from '../directives/layout-switcher/layout-switcher';
import { ElasticHeaderDirective } from '../directives/elastic-header/elastic-header';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeDetailPage,
    LayoutSwitcherDirective,
    ElasticHeaderDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeDetailPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {DashboardPage} from "../pages/dashboard/dashboard";
import { PlannerPage } from '../pages/planner/planner';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AssistantPage} from "../pages/assistant/assistant";
import {MapsPage} from "../pages/maps/maps";

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    PlannerPage,
    AssistantPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    PlannerPage,
    AssistantPage,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

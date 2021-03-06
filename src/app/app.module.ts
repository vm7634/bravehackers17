import { NgModule, LOCALE_ID } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { CalendarPage } from '../pages/calendar/calendar';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { MrtdataPage } from '../pages/mrtdata/mrtdata';
import { ChatBubble } from '../pages/components/chatBubble/chatBubble';
import { HomePage } from '../pages/home/home';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { MovieData } from '../providers/movie-data';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { TinymceModule } from 'angular2-tinymce';
import { JsonpModule } from '@angular/http';
import { NgCalendarModule } from 'ionic2-calendar';
import { PosterListPage } from "../pages/poster-list/poster-list";
import { PosterEditPage } from "../pages/poster-edit/poster-edit";
import { PosterService } from "../providers/poster.service";
import { MovieListPage } from "../pages/movie-list/movie-list";
import { MovieEditPage } from "../pages/movie-edit/movie-edit";
import { M2XService } from "../providers/m2x.service";


export const firebaseConfig = {
    apiKey: "AIzaSyDQ1wWxzlqkGMuB6bL4bQmeyVH7-OfDgzM",
    authDomain: "bravehackers17.firebaseapp.com",
    databaseURL: "https://bravehackers17.firebaseio.com",
    storageBucket: "bravehackers17.appspot.com",
    messagingSenderId: "236868911507"
};

@NgModule({
  declarations: [
    ConferenceApp,
    CalendarPage,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    TabsPage,
    TutorialPage,
    MrtdataPage,
    ChatBubble,
    SupportPage,
    MovieListPage,
    MovieEditPage,
    PosterListPage,
    PosterEditPage,
    HomePage
  ],
  imports: [      
    NgCalendarModule,
    IonicModule.forRoot(ConferenceApp),
		IonicStorageModule.forRoot(),
    TinymceModule.withConfig({
    }),
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    CalendarPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    MrtdataPage,
    MovieListPage,
    MovieEditPage,
    PosterListPage,
    PosterEditPage,
    HomePage
       
  ],
  providers: [
    ConferenceData,
    UserData,
    M2XService,
    PosterService,
    MovieData,
    InAppBrowser,
    SplashScreen,
    { provide: LOCALE_ID, useValue: undefined }
  ]
})
export class AppModule { }

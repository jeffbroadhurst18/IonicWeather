import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { JumperPage } from '../pages/jumper/jumper';
import { WeatherPage } from '../pages/weather/weather';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { WeatherService } from '../pages/weather/weather.service';
import { TransformLocationPipe } from '../pages/weather/weather.pipe';
import { HttpModule } from '@angular/http';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '0df2d585'
  }
};

@NgModule({
  declarations: [
    MyApp,
    JumperPage,
    WeatherPage,
    TransformLocationPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp), FormsModule,
    CloudModule.forRoot(cloudSettings),
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JumperPage,
    WeatherPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, WeatherService]
})
export class AppModule { }

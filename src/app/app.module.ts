import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { JumperPage } from '../pages/jumper/jumper';
import { WeatherPage } from '../pages/weather/weather';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { WeatherService } from '../pages/weather/weather.service';
import { TransformLocationPipe} from '../pages/weather/weather.pipe';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '0df2d585'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    JumperPage,
    WeatherPage,
    TransformLocationPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp),FormsModule,
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    JumperPage,
    WeatherPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},WeatherService]
})
export class AppModule {}

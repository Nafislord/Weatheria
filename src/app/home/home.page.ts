import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WSAEACCES } from 'constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ws : WeatherService) {
    this.test()
  }

  test(){
    this.ws.getWeatherData("London")
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiUrl = "http://api.openweathermap.org/data/2.5/weather"
  apiKey = 'dd1c781e5201a4999d747d2e38538d5d'

  constructor(private http : HttpClient) { 

  }

  public getWeatherData(city:string){

    console.log("Test method called")

    
    

    return  this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID="+this.apiKey).subscribe(data => {
      console.log(data)
    }) 
    
    
 

  }



}

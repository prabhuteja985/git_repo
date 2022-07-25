import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {

  }

  getWeather(location: string){
      return this.http.get(
          'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=2f1a33ae72d30ab95daea8d7da80a094' + location);
  }
}





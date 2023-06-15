import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '6b0f35c762d24a53b8480544230806';

  constructor(private http: HttpClient) { }

  getWeather(zipCode: string): Observable<any>{
    const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${zipCode}`; 

    return this.http.get<any>(url);
  }
}

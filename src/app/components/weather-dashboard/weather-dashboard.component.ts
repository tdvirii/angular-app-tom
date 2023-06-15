import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit {
  zipCode: string = '';
  weatherDetails: any;
  weatherDetailsRetrieved = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {

  }

  getWeatherDetails(){
    console.log('clicked');
      this.weatherService.getWeather(this.zipCode)
        .subscribe((res)=>{
          console.log('API Response:', res);
          this.weatherDetails = {
            city: res.location.name,
            temperature: res.current.temp_f,
            humidity: res.current.humidity,
            conditions: res.current.condition.text,
          };

        this.weatherDetailsRetrieved = true;
        console.log('Weather Details:', this.weatherDetails);
        });
    }

    goBack(){
      this.weatherDetails = '';
      this.weatherDetailsRetrieved = false;
    }
  }
    



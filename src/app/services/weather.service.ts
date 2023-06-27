import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      'https://open-weather13.p.rapidapi.com/city/' + cityName,
      {
        headers: new HttpHeaders()
          .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
          .set(
            'X-RapidAPI-Key',
            '66b43008d3msh2867171854aa659p168765jsn758950d1403f'
          ),
      }
    );
  }
}

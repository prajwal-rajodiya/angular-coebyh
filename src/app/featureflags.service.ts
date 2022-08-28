import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from './feature';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  //URL = 'http://localhost:5050/';
  URL='./data.json'
  constructor(private http: HttpClient) {}

  setFeatureFlags(flagsToUpdate: Feature[]) {
    this.http.post(this.URL + 'update', flagsToUpdate).subscribe((res) => {
      console.log(res);
    });
  }
  getFeatureflags(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.URL + 'features');
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Feature } from "./Feature";

@Injectable({
  providedIn: "root",
})
export class FeatureFlagsServiceService {
  featureFlags: Feature[];
  URL = "http://localhost:5050/flags";
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(this.URL).subscribe((result: Feature[]) => {
      this.featureFlags = result;
    });
  }
}

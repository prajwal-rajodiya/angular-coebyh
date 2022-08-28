import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Feature } from './feature';
import { FeatureFlagsService } from './featureflags.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  featureFlags: Feature[] = [];
  constructor(private service: FeatureFlagsService) {}
  ngOnInit() {
    this.service.getFeatureflags().subscribe((result: Feature[]) => {
      this.featureFlags = result;
    });
  }
  handleChange() {
    console.log('changed : ');
    console.log(this.featureFlags);
    this.service.setFeatureFlags(this.featureFlags);
  }
}
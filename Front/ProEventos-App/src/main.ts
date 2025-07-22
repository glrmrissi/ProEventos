import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse'

// TODO: Arrumar o provide animation

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withFetch()),
    provideNoopAnimations(),
    importProvidersFrom(CollapseModule.forRoot())
  ]
});
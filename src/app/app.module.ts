import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LiveDataService } from './services/LiveDataService';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppHttpInterceptor} from './services/HttpClient.Interceptor';
import {LoginModule} from './login/login.module';
import {AppRoutes} from './app.routings';
import {MyAppModule} from './my-app/my-app.module';
import { PlaceHolderDirective } from './common/directives/place-holder.directive';
import {HttpClientAPI} from './services/HttpClient';
import {DataService} from './services/DataService';

@NgModule({
  declarations: [
    AppComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    AppRoutes,
    MyAppModule
  ],
  providers: [
    { provide: DataService, useClass: LiveDataService },
    HttpClientAPI,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PhotosComponent } from './pages/photos/photos.component';
import { HttpFakeService } from './services/http-fake.service';
import { HttpClientModule } from '@angular/common/http';
import { RxjsExComponent } from './pages/rxjs-ex/rxjs-ex.component';
import { LearningComponent } from './pages/learning/learning.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    RxjsExComponent,
    LearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpFakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PhotosComponent } from './pages/photos/photos.component';
import { HttpFakeService } from './services/http-fake.service';
import { HttpClientModule } from '@angular/common/http';
import { RxjsExComponent } from './pages/rxjs-ex/rxjs-ex.component';
import { LearningComponent } from './pages/learning/learning.component';
import { Learning2Component } from './pages/learning2/learning2.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    RxjsExComponent,
    LearningComponent,
    Learning2Component,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpFakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

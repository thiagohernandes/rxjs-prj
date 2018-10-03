import { Learning2Component } from './pages/learning2/learning2.component';
import { LearningComponent } from './pages/learning/learning.component';
import { RxjsExComponent } from './pages/rxjs-ex/rxjs-ex.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { NgdebouncetimeComponent } from './pages/ngdebouncetime/ngdebouncetime.component';


const routes: Routes = [
    { path: '', redirectTo: 'app-photos', pathMatch: 'full' },

    { path: 'app-ngdebouncetime', component: NgdebouncetimeComponent},
    { path: 'app-messages', component: MessagesComponent},
    { path: 'app-learning2', component: Learning2Component},
    { path: 'app-photos', component: PhotosComponent},
    { path: 'app-rxjs-ex', component: RxjsExComponent},
    { path: 'app-learning', component: LearningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

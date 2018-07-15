import { LearningComponent } from './pages/learning/learning.component';
import { RxjsExComponent } from './pages/rxjs-ex/rxjs-ex.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/app-photos', pathMatch: 'full' },
    // { path: '', redirectTo: '/app-rxjs-ex', pathMatch: 'full' },
    { path: '', redirectTo: '/app-learning', pathMatch: 'full' },
    { path: 'app-photos', component: PhotosComponent},
    { path: 'app-rxjs-ex', component: RxjsExComponent},
    { path: 'app-learning', component: LearningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

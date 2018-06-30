import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';

const routes: Routes = [
    { path: '', redirectTo: '/app-photos', pathMatch: 'full' },
    { path: 'app-photos', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

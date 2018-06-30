import { HttpFakeService } from './../../services/http-fake.service';
import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../../interfaces/photo-interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public _photosData: IPhoto[];
  public messageError: any = null;
  public loading: boolean;

  constructor(private _photosService: HttpFakeService) { }

  ngOnInit() {
    this.loading = true;
    this._photosService.getAllPhotos()
                        .subscribe(response => {
                                      this._photosData = response;
                                      this.loading = false;
                                    },
                                   error => {
                                     this.messageError = error;
                                     this.loading = false;
                                    });
  }

}

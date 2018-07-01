import { HttpFakeService } from './../../services/http-fake.service';
import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../../interfaces/photo-interface';
import { from } from 'rxjs/internal/observable/from';
import { map } from 'rxjs/operators';

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
    this._photosService
        .getAllPhotos()
        .subscribe(response => {
                      // this._photosData = response.slice(0, 100);
                      this._photosData = response.filter(valor => valor.id <= 100 && valor.id % 2 === 0);
                      this.loading = false;
                      const source = from([1, 2, 3, 4, 5]);
                      // add 10 to each value
                      const example = source.pipe(map(val => val + 10));
                      // output: 11,12,13,14,15
                      const subscribe = example.subscribe(val => console.log(val));
                    },
                    error => {
                      this.messageError = error;
                      this.loading = false;
                    });
  }

}

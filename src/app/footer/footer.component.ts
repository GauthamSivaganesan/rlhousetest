import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
// import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  _albums = [] as  any;
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <=7; i++) {
      const src = 'assets/images/Photos/Footer/' + i + '.jpeg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/images/Photos/Footer/' + i + '.jpeg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
      this._albums.push(album);
    }
  }
  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }
  close(): void {
    this._lightbox.close();
  }
 
  ngOnInit(): void {
  }
}

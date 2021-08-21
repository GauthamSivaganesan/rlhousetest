import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private router: Router) { }
  sendRouteObject(item) {
    this.router.navigate(['/infraview'], {
      state: {
        site: item
      }
    });
  }
  ngOnInit(): void {
  }

}

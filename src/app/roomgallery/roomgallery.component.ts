import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { HomeComponent } from 'src/app/home/home.component';
import { ThreeSixtyModule } from '@mediaman/angular-three-sixty';
import { Router } from '@angular/router';
@Component({
  selector: 'app-roomgallery',
  templateUrl: './roomgallery.component.html',
  styleUrls: ['./roomgallery.component.css']
})
export class RoomgalleryComponent {
  showMainContent=true;
  imageSource="assets/images/7.png";

  data: any = {};
  routeState: any;
  test:string
  image_1:string
  image_2:string
  image_3:string
  image_4:string
  image_5:string
  image_6:string
  image_360: string
  showcontent_4_image: string
  showcontent_5_image: string
  showcontent_6_image: string

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.routeState = this.router.getCurrentNavigation().extras.state;
      if (this.routeState) {
        this.data.site = this.routeState.site ? this.routeState.site : '';
        switch(this.data.site){
          case 'Deluxe_Room':{
            this.image_1="assets/images/Photos/Deluxe Room/1.jpeg"
            this.image_2="assets/images/Photos/Deluxe Room/2.jpeg"
            this.image_3="assets/images/Photos/Deluxe Room/3.jpeg"
            this.image_4="assets/images/Photos/Deluxe Room/4.jpeg"
            this.image_5="assets/images/Photos/Deluxe Room/5.jpeg"
            this.image_360="assets/images/Photos/Deluxe Room/360.jpeg"
            this.imageSource="assets/images/Photos/Deluxe Room/1.jpeg"
            this.showcontent_4_image=""
            this.showcontent_5_image=""
          }
          break;
          case 'Joint_Room':{
            this.image_1="assets/images/Photos/Joint Room/1.jpeg"
            this.image_2="assets/images/Photos/Joint Room/2.jpeg"
            this.image_3="assets/images/Photos/Joint Room/3.jpeg"
            this.image_4="assets/images/Photos/Joint Room/1.jpeg"
            this.image_5="assets/images/Photos/Joint Room/1.jpeg"        
            this.image_360="assets/images/Photos/Joint Room/360.jpeg"
            this.imageSource="assets/images/Photos/Joint Room/1.jpeg"
            this.showcontent_4_image="showcontent"
            this.showcontent_5_image="showcontent"
          }break;
          case 'Executive_Room':{
            this.image_1="assets/images/Photos/Executive Room/1.jpeg"
            this.image_2="assets/images/Photos/Executive Room/2.jpeg"
            this.image_3="assets/images/Photos/Executive Room/3.jpeg"
            this.image_4="assets/images/Photos/Executive Room/4.jpeg"
            this.image_5="assets/images/Photos/Executive Room/1.jpeg"        
            this.image_360="assets/images/Photos/Executive Room/360.jpeg"
            this.imageSource="assets/images/Photos/Executive Room/1.jpeg"
            this.showcontent_4_image=""
            this.showcontent_5_image="showcontent"
            this.showcontent_6_image="showcontent"
          }break;
        }
        
      }
    }
  }

  onImageClick(event:any){
    this.showMainContent=true;
  this.imageSource=event.target.getAttribute('src');
  
  }
}


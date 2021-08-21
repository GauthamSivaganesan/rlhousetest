import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infraview',
  templateUrl: './infraview.component.html',
  styleUrls: ['./infraview.component.css']
})
export class InfraviewComponent {

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
          case 'Front_Elevation':{
            this.image_1="assets/images/Photos/Front Elevation/1.jpeg"
            this.image_2="assets/images/Photos/Front Elevation/2.jpeg"
            this.image_3="assets/images/Photos/Front Elevation/3.jpeg"
            this.image_4="assets/images/Photos/Front Elevation/4.jpeg"
            this.image_5="assets/images/Photos/Front Elevation/5.jpeg"
            this.image_360="assets/images/Photos/Deluxe Room/360.jpeg"
            this.imageSource="assets/images/Photos/Front Elevation/1.jpeg"
            this.showcontent_4_image=""
            this.showcontent_5_image=""
            this.showcontent_6_image="showcontent"
          }
          break;
          case 'Camp_Fire':{
            this.image_1="assets/images/Photos/Campfire/1.jpeg"
            this.image_2="assets/images/Photos/Campfire/2.jpeg"
            this.image_3="assets/images/Photos/Campfire/3.jpeg"
            this.image_4="assets/images/Photos/Campfire/1.jpeg"
            this.image_5="assets/images/Photos/Campfire/1.jpeg"           
            this.image_360="assets/images/Photos/Campfire/360.jpeg"
            this.imageSource="assets/images/Photos/Campfire/1.jpeg"
            this.showcontent_4_image="showcontent"
            this.showcontent_5_image="showcontent"
            this.showcontent_6_image=""
          }break;
          case 'Main_Hall':{
            this.image_1="assets/images/Photos/Executive Room/1.jpeg"
            this.image_2="assets/images/Photos/Executive Room/2.jpeg"
            this.image_3="assets/images/Photos/Executive Room/3.jpeg"
            this.image_4="assets/images/Photos/Executive Room/4.jpeg"
            this.image_5="assets/images/Photos/Executive Room/1.jpeg"        
            this.image_360="assets/images/Photos/Executive Room/360.jpeg"
            this.imageSource="assets/images/Photos/Executive Room/1.jpeg"
            this.showcontent_4_image=""
            this.showcontent_5_image=""
            this.showcontent_6_image=""
          }break;
          default:{
            this.image_1="assets/images/Photos/Front Elevation/1.jpeg"
            this.image_2="assets/images/Photos/Front Elevation/2.jpeg"
            this.image_3="assets/images/Photos/Front Elevation/3.jpeg"
            this.image_4="assets/images/Photos/Front Elevation/4.jpeg"
            this.image_5="assets/images/Photos/Front Elevation/5.jpeg"
            this.image_360="assets/images/Photos/Deluxe Room/360.jpeg"
            this.imageSource="assets/images/Photos/Front Elevation/1.jpeg"
          }
        }        
      }
    }
  }
onThreesixty(event:any){
  if(this.data.site=='Front_Elevation'){
    this.showMainContent=true;
    this.imageSource=event.target.getAttribute('src');
  }else{
    this.showMainContent=false;
  }

}
  onImageClick(event:any){
    this.showMainContent=true;
  this.imageSource=event.target.getAttribute('src');  
  }

}

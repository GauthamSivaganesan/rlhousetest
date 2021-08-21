import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { InfraviewComponent } from './infraview/infraview.component';
import { RoomgalleryComponent } from './roomgallery/roomgallery.component';
import { RoomsComponent } from './rooms/rooms.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "rooms", component: RoomsComponent},
  {path: "contact", component: ContactComponent},
  {path: "roomgallery",component:RoomgalleryComponent},
  {path: "gallery",component:GalleryComponent},
  {path: "infraview",component:InfraviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

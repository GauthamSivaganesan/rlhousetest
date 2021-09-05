import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { FooterComponent } from './footer/footer.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RoomgalleryComponent } from './roomgallery/roomgallery.component';
import { ThreeSixtyModule } from '@mediaman/angular-three-sixty';
import { InfraviewComponent } from './infraview/infraview.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RoomsComponent,
    ContactComponent,
    GalleryComponent,
    RoomgalleryComponent,
    InfraviewComponent
  ],
  imports: [
    BrowserModule,
    LightboxModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    NgbModule,
    ThreeSixtyModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainBodyComponent } from './components/main/main-body/main-body.component';
import { BannerComponent } from './components/main/main-body/banner/banner.component';
import { SerumLoadedComponent } from './components/main/main-body/serum-loaded/serum-loaded.component';
import { ArtistBodyComponent } from './components/artist/artist-body/artist-body.component';
import { PlayerComponent } from './components/player/player.component';
import {PlayDataService} from '../app/play-data.service'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ArtistComponent,
    NavbarComponent,
    SidebarComponent,
    MainBodyComponent,
    BannerComponent,
    SerumLoadedComponent,
    ArtistBodyComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PlayDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

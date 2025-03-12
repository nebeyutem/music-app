import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpotifyApiServiceService } from './api/spotify-api-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AlbumListComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'music-app';
}

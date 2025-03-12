import { Component } from '@angular/core';
import { SpotifyApiServiceService } from '../api/spotify-api-service.service';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-album-list',
  imports: [CommonModule],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent {
  response: any;

  constructor(private spotifyApiService: SpotifyApiServiceService) {}

  ngOnInit() {
    this.spotifyApiService.getNewAlbums()
      .then(album => {
      console.log(album)
      this.response = album;
      // The JSON object returned by this function is named 'album'. to be used to display albums
      });
  }
}




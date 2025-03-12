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
  albumsToConsider: Array<any> = []
  constructor(private spotifyApiService: SpotifyApiServiceService) {}
  
  ngOnInit() {
    this.spotifyApiService.getNewAlbums()
      .then(album => {
      console.log(album)
      this.response = album;
      // I moved the logic here because you want to do as many as "calculations" as you can in the TS file
      this.albumsToConsider = this.response.albums.items.slice(0, 9);
      console.log(this.albumsToConsider)
      // The JSON object returned by this function is named 'album'. to be used to display albums
      });
  }
}




import axios from 'axios';
import { Buffer } from 'buffer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const client_id = 'd03b312c9d654567bd0d68874dcd225a';
const client_secret = '7d5b90579746405b9a090c9e5bafbb61';

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
  },
  params: {
    grant_type: 'client_credentials'
  }
};


@Injectable({
    providedIn: 'root'
})

    export class SpotifyApiServiceService {
        private accessToken: string;

        constructor() {
            this.accessToken = '';
            //const token = '';
            //this.initializeToken();
        }

        private async initializeToken() {
            try {
                const response = await axios.post(authOptions.url, authOptions.params, { headers: authOptions.headers });
                if (response.status === 200) {
                    this.accessToken = response.data.access_token;
                    //console.log(this.accessToken);
                }
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        }

        public async getAlbum(albumId: string) {
            try {
                //calling initialize token function to get access token
                await this.initializeToken();

                //console.log(this.accessToken);
                const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
                    headers: {
                        'Content-Type':'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${this.accessToken}`
                    }

                });
                return response.data;
            } catch (error) {
                console.error('Error fetching album:', error);
                throw error;
            }
        }

        public async getNewAlbums() {
            try {
                await this.initializeToken();
                const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
                    headers: {
                        'Content-Type':'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${this.accessToken}`
                    }
                });
                return response.data;
            } catch (error) {
                console.error('Error fetching new albums:', error);
                throw error;
            }

        }

        


    }



//now figure out how to pull the image from json object and display it in the html
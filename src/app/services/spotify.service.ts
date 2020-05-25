import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http: HttpClient ) {
    console.log('Spotify Service corre');
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDgrstlwxZj8si4wHTs22MHwe2IPkCSKT-CB_aOT8uMlG-NhpWvgQb_IiDwfxIq8-GkpGyDxLtaRa_TKdrprbJHt3teYTX_b8wj7AiLJQqZEELlPlLP-l7PDGBGXwRe9hxoDISw6JC_z_qLPUjFV1ELD4MOeMJlPQA'
    });
    return this.http.get( url, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
     .pipe( map( data =>  data['albums'].items ));
  }
  getArtista(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map (data => {
        return data['artists'].items;
      }));
  }
}

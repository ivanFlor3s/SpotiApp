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
      Authorization: 'Bearer BQAVrgv5UazimJdvbw34tydddE4ablf8As4OOjJYSeex-9aZYv7pWtrJKZNmyL7iRwcJ1mInP9Eq-cRUpnc'
    });
    return this.http.get( url, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
     .pipe( map( data =>  data['albums'].items ));
  }
  getArtistas(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map (data => {
        return data['artists'].items;
      }));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
    //  .pipe( map( data => { return data[]} ))
  }
}

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
      Authorization: 'Bearer BQCXH25j_2jwiFPY9COAJskh7QXTwAbByjl_oTqTEfiUfxUdqdSbJBPplAZE44FeLhayl58pL6cut6N4odc'
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

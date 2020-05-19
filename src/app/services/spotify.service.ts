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
  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCoeZESNOGhc7C681vV852gOOlpQkUUUOm0ecWdrss9tu284Py5mx___ENvmeC9zmKdXoXPDic3gVjflKU'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe( map( data => {
        return data['albums'].items;
      }));
  }
  getArtista(termino: string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCoeZESNOGhc7C681vV852gOOlpQkUUUOm0ecWdrss9tu284Py5mx___ENvmeC9zmKdXoXPDic3gVjflKU'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
      .pipe( map (data => {
        return data['artists'].items;
      }))
  }
}

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
      Authorization: 'Bearer BQBg2zbnR2qnS98mkPS81iSujvZOPJxoe_8rZ73t2HiyZQ6_YU5F_wNH3YPH48uCGFvBfCmeqrAXyz0Ovf8'
    });
    return this.http.get( url, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => {
        return data['albums'].items;
      }));
  }
  getArtista(termino: string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCoeZESNOGhc7C681vV852gOOlpQkUUUOm0ecWdrss9tu284Py5mx___ENvmeC9zmKdXoXPDic3gVjflKU'
    });
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map (data => {
        return data['artists'].items;
      }));
  }
}

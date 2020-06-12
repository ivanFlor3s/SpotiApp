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
      Authorization: 'Bearer BQC8clX1I_kpZRi7L_6dmUvlAlRL2mRho2-cYbRKyxqzwGKvf8GRyHGRO8RvMCH0QBy4RLRX5_AeteZfcl'
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

  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=US`)
      .pipe(map( data => {
        return data['tracks'];
      }));
  }
}
//"https://api.spotify.com/v1/artists/2iojnBLj0qIMiKPvVhLnsH/top-tracks?country=ES
//"https://api.spotify.com/v1//artists/2iojnBLj0qIMiKPvVhLnsH/top-tracks?country=US
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  canciones: any[] = [];
  constructor( private http: HttpClient, private spotifyService: SpotifyService){
    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        this.canciones = data;
        console.log(this.canciones);
      });
  }

  ngOnInit(): void {
  }


}

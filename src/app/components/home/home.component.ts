import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { BoundElementPropertyAst } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean;
  error: boolean;
  canciones: any[] = [];
  errorMessage: string;

  constructor( private http: HttpClient, private spotifyService: SpotifyService){
    this.error = false;
    this.loading = true;
    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        this.canciones = data;
        console.log(this.canciones);
        this.loading = false;
      }, (errorServicio) => {
        this.errorMessage = errorServicio.error.error.message;
        this.error = true;
        this.loading = false;
      });
  }

  ngOnInit(): void {
  }


}

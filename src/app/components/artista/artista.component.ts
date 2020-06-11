import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor( private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTracks(params['id']);
    });
  }
  ngOnInit(): void {
  }
  getArtista(idArtista: string){
    this.loading = true;
    return this.spotifyService.getArtista(idArtista)
      .subscribe(artista => {
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      });
  }

  getTracks(id: string){
    this.spotifyService.getTopTracks(id)
      .subscribe(tracks => {
        console.log(tracks);
        this.topTracks = tracks;
      });
  }

}

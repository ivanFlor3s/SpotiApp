import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;
  constructor(private spotifyService: SpotifyService) {
   }

  ngOnInit(): void {

  }

  buscarArtista(termino: string){
    this.loading = true;
    console.log(termino);
    this.spotifyService.getArtista(termino).subscribe( (data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }

}

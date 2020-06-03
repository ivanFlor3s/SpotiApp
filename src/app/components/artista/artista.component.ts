import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      console.log( 'se ba a  buscar a este gilaso: ', params['id']);
    });
  }
  ngOnInit(): void {
  }

}

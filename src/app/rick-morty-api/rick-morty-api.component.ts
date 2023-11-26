import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rick-morty-api',
  templateUrl: './rick-morty-api.component.html',
  styleUrls: ['./rick-morty-api.component.css']
})
export class RickMortyApiComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(response => {
        this.characters = response.results.filter(character => character.id % 2 !== 0);
      });
  }
}

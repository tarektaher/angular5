import { Component, OnInit } from '@angular/core';
import { MarvelHeroService } from './marvel-hero.service';

@Component({
  selector: 'app-marvel-heros',
  templateUrl: './marvel-heros.component.html',
  styleUrls: ['./marvel-heros.component.css'],
    providers: [MarvelHeroService]
})

export class MarvelHerosComponent implements OnInit {

    heros: string[];
    btnDisabled = false;
    inputHero = null;
    adding = false;

    AddHero() {
      this.heros.push(this.inputHero);
        this.inputHero = null;
        this.adding = false;
    }
    AddMore() {
      this.adding = !this.adding;
    }
  constructor(private ajax: MarvelHeroService) {
      this.heros = ajax.heros;
  }

  ngOnInit() {
  }

}

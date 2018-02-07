import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor() {
  }

  heroes = HEROES;

  selectedHero: Hero;

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
}

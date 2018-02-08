import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService: HeroService) {
  }

  heroes: Hero[];

  selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      console.log(this.heroes);
    });
    console.log(this.heroes);
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
}

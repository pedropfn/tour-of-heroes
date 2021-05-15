import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'All Migth' },
      { id: 12, name: 'Eraser Head' },
      { id: 13, name: 'Gran Torino' },
      { id: 14, name: 'Deku' },
      { id: 15, name: 'Dynamight' },
      { id: 16, name: 'Tsukuyomi' },
      { id: 17, name: 'Red Riot' },
      { id: 18, name: 'Suneater' },
      { id: 19, name: 'Lemillion' },
      { id: 20, name: 'Mirko' },
      { id: 21, name: 'Best Jeanist' },
      { id: 22, name: 'Hawks' },
      { id: 23, name: 'Endeavor' },
      { id: 24, name: 'Gang Orca' },
      { id: 25, name: 'Fat Gum' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}

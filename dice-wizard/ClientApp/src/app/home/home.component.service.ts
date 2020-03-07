import { Injectable } from '@angular/core';
import { DiceRoll } from '../models/dice-roll.model';

@Injectable()
export class HomeService {
  diceRolls: DiceRoll[] = [];
  constructor() { }

}
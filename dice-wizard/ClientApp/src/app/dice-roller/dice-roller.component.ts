import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.component.service';
import { DiceRoll } from '../models/dice-roll.model';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  numberOfSides = 20;
  name: string | null;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  rollDice(): void{
    let roll = new DiceRoll();
    roll.name = this.name;
    roll.diceRoll = Math.floor(Math.random() * this.numberOfSides) + 1;
    this.homeService.diceRolls.push(roll);
  }

  canRoll(): Boolean{
    if(this.name === null || this.name === undefined){
      return false;
    }
    let existingName = this.homeService.diceRolls.some(x => x.name.toLocaleLowerCase() === this.name.toLowerCase());
    if(existingName === true){
      return false;
    }
    return true;
  }
}

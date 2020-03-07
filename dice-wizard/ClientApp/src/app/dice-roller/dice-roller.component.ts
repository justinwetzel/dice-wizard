import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  numberOfSides = 20;
  name: string | null;
  constructor() { }

  ngOnInit() {
  }

}

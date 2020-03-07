import { Component, OnInit } from '@angular/core';
import { DiceRoll } from '../models/dice-roll.model';
import { HomeService } from '../home/home.component.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    var justinRoll = new DiceRoll();
    justinRoll.diceRoll = 8;
    justinRoll.name = 'Justin';

    var chrisRoll = new DiceRoll();
    chrisRoll.diceRoll = 19;
    chrisRoll.name = 'Chris';

    this.homeService.diceRolls.push(justinRoll);
    this.homeService.diceRolls.push(chrisRoll);

    this.homeService.diceRolls.sort((a, b) => 0 - (a.diceRoll > b.diceRoll ? 1 : -1));
  }

}

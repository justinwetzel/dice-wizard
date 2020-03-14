import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.component.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.diceRolls.sort((a, b) => 0 - (a.diceRoll > b.diceRoll ? 1 : -1));
  }
}

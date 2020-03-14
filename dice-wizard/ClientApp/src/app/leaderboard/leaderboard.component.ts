import { Component, OnInit } from "@angular/core";
import { HomeService } from "../home/home.component.service";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { DiceRoll } from "../models/dice-roll.model";

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styleUrls: ["./leaderboard.component.css"]
})
export class LeaderboardComponent implements OnInit {
  faTrophy = faTrophy;
  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.diceRolls.sort(
      (a, b) => 0 - (a.diceRoll > b.diceRoll ? 1 : -1)
    );
  }

  isHighestRoll(roll: DiceRoll): boolean {
    let allRolls = this.homeService.diceRolls.map(x => x.diceRoll);
    let maxRoll = Math.max.apply(Math, allRolls);
    debugger;
    if (roll.diceRoll === maxRoll) {
      return true;
    }
    return false;
  }
}

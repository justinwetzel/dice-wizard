import { Component, OnInit } from "@angular/core";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { DiceRoll } from "../models/dice-roll.model";
import { LeaderboardService } from "./leaderboard.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.component.html",
  styleUrls: ["./leaderboard.component.css"]
})
export class LeaderboardComponent implements OnInit {
  faTrophy = faTrophy;
  constructor(public leaderboardService: LeaderboardService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.get();
  }

  get(): void {
    this.leaderboardService.getLeaderboard();
  }

  isHighestRoll(roll: DiceRoll): boolean {
    let allRolls = this.leaderboardService.diceRolls.map(x => x.roll);
    let maxRoll = Math.max.apply(Math, allRolls);
    if (roll.roll === maxRoll) {
      return true;
    }
    return false;
  }

  setNumberOfSides(sides: number): void {
    this.leaderboardService.numberOfSides = sides;
    this.leaderboardService.getLeaderboard();
  }
}

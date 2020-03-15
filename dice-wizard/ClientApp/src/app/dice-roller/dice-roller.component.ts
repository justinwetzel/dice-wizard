import { Component, OnInit } from "@angular/core";
import { LeaderboardService } from "../leaderboard/leaderboard.service";
import { DiceRollerService } from "./dice-roller.service";
import { DiceRoll } from "../models/dice-roll.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dice-roller",
  templateUrl: "./dice-roller.component.html",
  styleUrls: ["./dice-roller.component.css"]
})
export class DiceRollerComponent implements OnInit {
  numberOfSides = 20;
  name: string | null;
  constructor(
    private leaderboardService: LeaderboardService,
    private diceRollerService: DiceRollerService,
    private router: Router, private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  rollDice(): void {
    let roll = new DiceRoll();
    roll.name = this.name;
    roll.roll = Math.floor(Math.random() * this.numberOfSides) + 1;
    roll.createdDate = new Date();
    roll.numberOfSides = this.numberOfSides;
    this.leaderboardService.numberOfSides = this.numberOfSides;
    this.diceRollerService.insertDiceRoll(roll).subscribe({
      complete: () => {
        this.router.navigate(['../leaderboard'], { relativeTo: this.activatedRoute });
      }
    });
  }

  get canRoll(): Boolean {
    if (this.name === null || this.name === undefined || this.name === "") {
      return false;
    }
    let existingName = this.leaderboardService.diceRolls.some(
      x => x.name.toLowerCase() === this.name.toLowerCase()
    );
    if (existingName === true) {
      return false;
    }
    return true;
  }
}

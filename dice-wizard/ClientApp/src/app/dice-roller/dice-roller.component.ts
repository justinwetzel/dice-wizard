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
    let sideId = this.getNumberOfSidesId();
    this.diceRollerService.insertDiceRoll(this.name, sideId).subscribe({
      complete: () => {
        this.router.navigate(['../leaderboard'], { relativeTo: this.activatedRoute });
      }
    });
  }

  private getNumberOfSidesId(): number {
    this.leaderboardService.numberOfSides = this.numberOfSides;
    if(this.numberOfSides == 6)
    {
      return 1;
    }
    else if(this.numberOfSides == 8)
    {
      return 2;
    }
    else if(this.numberOfSides == 10)
    {
      return 3;
    }
    else if(this.numberOfSides == 12)
    {
      return 4;
    }
    else if(this.numberOfSides == 20)
    {
      return 5;
    }
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

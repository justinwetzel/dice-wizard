import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { DiceRoll } from "../models/dice-roll.model";

@Injectable({
  providedIn: "root"
})
export class LeaderboardService {
  numberOfSides = 20;
  diceRolls = new Array<DiceRoll>();
  baseUrl: string;
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getLeaderboard(): void {
    let params = new HttpParams().set('numberOfSides', this.numberOfSides.toString());

    this.http
      .get<DiceRoll[]>(this.baseUrl + "api/leaderboard", { params: params})
      .subscribe((data: DiceRoll[]) => {
        data.sort((a, b) => 0 - (a.roll > b.roll ? 1 : -1));
        this.diceRolls = data;
      });
  }
}

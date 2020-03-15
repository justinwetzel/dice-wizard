import { Component, OnInit } from "@angular/core";
import { LeaderboardService } from "../leaderboard/leaderboard.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(private leaderboardService: LeaderboardService) {}

  ngOnInit() {
    this.leaderboardService.getLeaderboard();
  }
}

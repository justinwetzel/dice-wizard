import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DiceRoll } from "../models/dice-roll.model";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class DiceRollerService {
  baseUrl: string;
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  insertDiceRoll(diceRoll: DiceRoll): Observable<void> {
    return this.http.post<void>(
      this.baseUrl + "api/diceroll",
      diceRoll,
      httpOptions
    );
  }
}

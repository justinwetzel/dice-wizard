import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { DiceRoll } from "../models/dice-roll.model";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class DiceRollerService {
  baseUrl: string;
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  insertDiceRoll(name: string, numberOfSides: number): Observable<void> {
    let params = new HttpParams().set('numberOfSidesId', numberOfSides.toString())
    .set('name', name);

    
    return this.http.get<void>(
      this.baseUrl + "api/diceroll",
      { params: params }
    );
  }
}

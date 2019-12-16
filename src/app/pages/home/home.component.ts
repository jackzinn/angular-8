import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}
  home: string;

  ngOnInit() {
    this.home = "Olá";
  }

  changeData() {
    console.log(this.home);
  }
}

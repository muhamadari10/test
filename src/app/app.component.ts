import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  title = 'Test Angular';
  public loading = true;
  public potrait = false;

  constructor(
  ) { }

  ngOnInit(){

  }
}

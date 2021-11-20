import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images = [
    {path: '/assets/01.png'},
    {path: '/assets/02.png'},
    {path: '/assets/03.png'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

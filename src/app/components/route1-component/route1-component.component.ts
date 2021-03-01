import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route1-component',
  templateUrl: './route1-component.component.html',
  styleUrls: ['./route1-component.component.scss']
})
export default class Route1ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init');
  }

}

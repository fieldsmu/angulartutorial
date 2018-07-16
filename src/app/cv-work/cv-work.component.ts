import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-work',
  templateUrl: './cv-work.component.html',
  styleUrls: ['./cv-work.component.css']
})
export class CvWorkComponent implements OnInit {
  workplaces = [
    {name: 'cvs', location: 'West Chester, OH', things: ['played with the widget', 'saved the widget', 'fought the widget']},
    {name: 'fuzzrocket', location: 'Cincinnati, OH', things: ['played with the widget', 'saved the widget', 'fought the widget']}
  ];
  constructor() { }

  ngOnInit() {
  }

}

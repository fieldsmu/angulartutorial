import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-education',
  templateUrl: './cv-education.component.html',
  styleUrls: ['./cv-education.component.css']
})
export class CvEducationComponent implements OnInit {
  schools = [
    {name:'university of cincinnati', location: 'Cincinnati, OH', things: ['played with the widget', 'saved the widget', 'fought the widget']},
    {name: 'cincy code it', location: 'Mason, OH', things: ['played with the widget', 'saved the widget', 'fought the widget']}
  ];
  constructor() { }

  ngOnInit() {
  }

}

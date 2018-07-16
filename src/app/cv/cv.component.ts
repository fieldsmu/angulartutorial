import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  workplaces = [
    {name: 'cvs', location: 'West Chester, OH', things: ['played with the widget', 'saved the widget', 'fought the widget']},
    {name: 'fuzzrocket', location: 'Cincinnati, OH', things: ['played with the widget', 'saved the widget', 'fought the widget']}
  ];
  schools = [
    {name:'university of cincinnati', location: 'Cincinnati, OH', things: ['played with the widget', 'saved the widget', 'fought the widget']},
    {name: 'cincy code it', location: 'Mason, OH', things: ['played with the widget', 'saved the widget', 'fought the widget']}
  ];
  skills: string[] = ['html', 'css', 'javascript', 'typescript', 'angular', 'bootstrap', 'jQuery'];

  constructor() { }

  ngOnInit() {
  }

}

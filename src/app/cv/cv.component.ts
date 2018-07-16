import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  skills: string[] = ['html', 'css', 'javascript', 'typescript', 'angular', 'bootstrap', 'jQuery'];

  constructor() { }

  ngOnInit() {
  }

}

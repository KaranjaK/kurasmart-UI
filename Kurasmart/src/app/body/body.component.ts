import { Component, OnInit } from '@angular/core';
import { faTriangleCircleSquare,faProjectDiagram,faNetworkWired,faFaceLaughWink,faDropletSlash,faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  faTriangle = faTriangleCircleSquare
  faProjectDiagram = faProjectDiagram
  faNetworkWired = faNetworkWired
  faFaceLaughWink = faFaceLaughWink
  faDropletSlash = faDropletSlash
  faStarAndCrescent = faStarAndCrescent
  constructor() { }

  ngOnInit(): void {
  }

}

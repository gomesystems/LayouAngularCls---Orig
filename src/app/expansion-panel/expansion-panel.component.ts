import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {
  panelOpenState = false;
  
  favoriteSeason: string;
  seasons: string[] = ['Capital de Giro'];
  seasons2: string[] = ['Loren Ipson'];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-java-skills-infos',
  templateUrl: './java-skills-infos.component.html',
  styleUrls: ['./java-skills-infos.component.scss']
})
export class JavaSkillsInfosComponent implements OnInit {
  @Input('tech') tech : String;

  constructor() { }

  ngOnInit() {
  }

}

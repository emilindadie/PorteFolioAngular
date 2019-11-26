import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-js-skills-infos',
  templateUrl: './js-skills-infos.component.html',
  styleUrls: ['./js-skills-infos.component.scss']
})
export class JsSkillsInfosComponent implements OnInit {


  @Input('tech') tech : String;
  constructor() { }

  ngOnInit() {
  
  }

}

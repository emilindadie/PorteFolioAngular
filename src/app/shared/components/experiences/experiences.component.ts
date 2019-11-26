import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RenderTableLayoutService } from '../../services/renderTableLayout.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(private router : Router, private renderTable : RenderTableLayoutService) { }

  ngOnInit() {
    let currentUrl = this.router.url; 
    this.renderTable.renderTable(currentUrl)
  }

}

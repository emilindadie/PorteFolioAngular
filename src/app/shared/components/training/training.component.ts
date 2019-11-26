import { Component, OnInit } from '@angular/core';
import { RenderTableLayoutService } from '../../services/renderTableLayout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  constructor(private renderTable : RenderTableLayoutService, private router : Router) { }

  ngOnInit() {
    let currentUrl = this.router.url; 
    this.renderTable.renderTable(currentUrl)
  }

}

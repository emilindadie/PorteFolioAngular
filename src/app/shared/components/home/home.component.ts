import { Component, OnInit } from '@angular/core';
import { LoadingPageService } from '../../services/loadingPage.service';
import {Router } from '@angular/router';
import { RenderTableLayoutService } from '../../services/renderTableLayout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public loadingPageService : LoadingPageService, private renderTable : RenderTableLayoutService, private router : Router) { }

  ngOnInit() {
    let currentUrl = this.router.url; 
    this.renderTable.renderTable(currentUrl)
  }
}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleSideNavService } from '../../shared/services/toggleSideNav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  constructor(private router : Router, private toggleSideNavService : ToggleSideNavService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  loadPage(page:string){
    if(window.innerWidth < 1210){
      this.toggleSideNavService.toggleSideNav(true);
    }
    this.router.navigate([page]);
  }
}

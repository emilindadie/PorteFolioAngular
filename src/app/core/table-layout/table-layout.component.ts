import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RenderTableLayoutService } from 'src/app/shared/services/renderTableLayout.service';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.scss']
})
export class TableLayoutComponent implements OnInit, AfterViewInit {


  $home : BehaviorSubject<boolean> =  new BehaviorSubject(true);
  $skills : BehaviorSubject<boolean> =  new BehaviorSubject(false);
  $experiences : BehaviorSubject<boolean> =  new BehaviorSubject(false);
  $training : BehaviorSubject<boolean> =  new BehaviorSubject(false);

  constructor(private renderTablelayoutService : RenderTableLayoutService) { }

  ngOnInit() {
    this.renderTablelayoutService.actionChangePage.subscribe(res => {
      switch(res){
        case "/about" : 
          this.$home.next(true);
          if(this.$skills){
            this.$skills.next(false);
          }
          if(this.$experiences){
            this.$experiences.next(false);
          }
          if(this.$training){
            this.$training.next(false);
          }
        break;

        case "/skills" : 
          this.$skills.next(true);
          if(this.$home){
            this.$home.next(false);
          }
          if(this.$experiences){
            this.$experiences.next(false);
          }
          if(this.$training){
            this.$training.next(false);
          }
        break;

        case "/experiences" : 
          this.$experiences.next(true);
          if(this.$home){
            this.$home.next(false);
          }
          if(this.$skills){
            this.$skills.next(false);
          }
          if(this.$training){
            this.$training.next(false);
          }
        break;

        case "/training" : 
          this.$training.next(true);
          if(this.$home){
            this.$home.next(false);
          }
          if(this.$skills){
            this.$skills.next(false);
          }
          if(this.$experiences){
            this.$experiences.next(false);
          }
        break;
      }
    })
  }

  ngAfterViewInit(): void {
  }
}

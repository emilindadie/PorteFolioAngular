import { Component, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RenderTableLayoutService } from '../../services/renderTableLayout.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class SkillsComponent implements OnInit {

  state = 'hide'
  @ViewChild('infosDiv') infosDiv: ElementRef;

  @ViewChild('jsInfosDiv') jsInfosDiv: ElementRef;
  @ViewChild('javaInfosDiv') javaInfosDiv: ElementRef;

  jsInfosTech = "";
  javaInfosTech = "";

  constructor(public el: ElementRef, private router : Router, private renderTable : RenderTableLayoutService) { }

  ngOnInit() {
    let currentUrl = this.router.url; 
    this.renderTable.renderTable(currentUrl)
    this.jsInfosDiv.nativeElement.hide = 'true';
  }
  
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }


  loadInfos(value : string){
      switch(value) {
        case 'js' : 
        this.jsInfosTech = 'js';
        if(this.jsInfosDiv.nativeElement.classList.contains('dismiss')){
          this.jsInfosDiv.nativeElement.classList.remove('dismiss');
          this.jsInfosDiv.nativeElement.classList.add('selected');
          this.jsInfosDiv.nativeElement.show = 'true';
        } else {
          this.jsInfosDiv.nativeElement.classList.add('selected');
          this.jsInfosDiv.nativeElement.show = 'true';
        }
        break;

        case 'angular' : 
        this.jsInfosTech = 'angular';
        if(this.jsInfosDiv.nativeElement.classList.contains('dismiss')){
          this.jsInfosDiv.nativeElement.classList.remove('dismiss');
          this.jsInfosDiv.nativeElement.classList.add('selected');
          this.jsInfosDiv.nativeElement.show = 'true';
        } else {
          this.jsInfosDiv.nativeElement.classList.add('selected');
          this.jsInfosDiv.nativeElement.show = 'true';
        }
        break;

        case 'java' : 
        this.javaInfosTech = 'java';
        if(this.javaInfosDiv.nativeElement.classList.contains('dismiss')){
          this.javaInfosDiv.nativeElement.classList.remove('dismiss');
          this.javaInfosDiv.nativeElement.classList.add('selected');
          this.javaInfosDiv.nativeElement.show = 'true';
        } else {
          this.javaInfosDiv.nativeElement.classList.add('selected');
          this.javaInfosDiv.nativeElement.show = 'true';
        }
        break;
      }
  }


  hideInfos(value : string){
    switch(value) {
      case 'js' : 
      if(this.jsInfosDiv.nativeElement.classList.contains('selected')){
        this.jsInfosDiv.nativeElement.classList.remove('selected');
        this.jsInfosDiv.nativeElement.classList.add('dismiss');
        this.jsInfosDiv.nativeElement.show = 'false';
      }
      break;
      case 'angular' : 
      if(this.jsInfosDiv.nativeElement.classList.contains('selected')){
        this.jsInfosDiv.nativeElement.classList.remove('selected');
        this.jsInfosDiv.nativeElement.classList.add('dismiss');
        this.jsInfosDiv.nativeElement.show = 'false';
      }
      break;

      case 'java' : 
      if(this.javaInfosDiv.nativeElement.classList.contains('selected')){
        this.javaInfosDiv.nativeElement.classList.remove('selected');
        this.javaInfosDiv.nativeElement.classList.add('dismiss');
        this.javaInfosDiv.nativeElement.show = 'false';
      }
      break;
    }
  }
}

import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatDrawer, MatSidenav, MatDialog } from '@angular/material';
import { ToggleSideNavService } from '../../shared/services/toggleSideNav.service';
import { HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { RenderTableLayoutService } from 'src/app/shared/services/renderTableLayout.service';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
  animations: [
   // slideInAnimation
  ]
})
export class WebsiteComponent implements OnInit {

  showSpinner$ : BehaviorSubject<boolean> = new BehaviorSubject(true);
  @ViewChild('drawer') drawer: MatDrawer;
  @ViewChild('appDrawer') appDrawer: MatSidenav;
  page : string = 'about';

  mode = 'one';


  constructor(private toggleSideNavService : ToggleSideNavService, private renderTableLayoutService : RenderTableLayoutService, private route: ActivatedRoute, public dialog: MatDialog, private router : Router) {
   }

  ngOnInit() {
    
    const dialogRef = this.dialog.open(LoadingComponent, {
      width: '40%',
    });

    setTimeout(function(){
      dialogRef.componentInstance.dialogRef.close();
    },2000);

    window.addEventListener('scroll', this.scroll, true); //third parameter
    this.renderTableLayoutService.actionChangePage.subscribe(res => {
      console.log(res);
      switch(res){
        case '/about' :
          this.page = 'about';
        break;
  
        case '/skills' : 
          this.page = 'skills';
        break;

        case '/experiences' : 
          this.page = 'experiences';
        break;

        case '/training' : 
        this.page = 'training';
        break;
      }
    });
   
    if(window.innerWidth > 1210){
      this.drawer.mode = 'over';
      this.drawer.opened = true;
    }else{
      this.drawer.mode = 'side';
      this.drawer.opened = false;
    }

   this.toggleSideNavService.actionSideNav.subscribe( (res) =>{
      if(res){
        if(window.innerWidth > 1210){
          this.drawer.mode = 'side';
        }else{
          this.drawer.mode = 'over';
        }
        this.drawer.toggle();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 1210 && this.mode == 'one'){
      if(this.drawer.opened == true){
        this.drawer.toggle();
      }      
      this.mode = 'two';
    }
    else if(window.innerWidth > 1210 && this.mode == 'two'){
      if(this.drawer.opened == false){
        this.drawer.toggle();
      }
      this.drawer.mode = 'side';
      this.mode = 'one';
    }
  }

  scroll = (): void => {
    let scrollValue = window.pageYOffset;
    switch(this.page){
      case 'skills': 
        const jsStack = document.getElementById('js-stack') as HTMLElement;
        const jsStackTarget = document.getElementById('js-stack-target') as HTMLElement;
        const javaStack= document.getElementById('java-stack') as HTMLElement;
        const javaStackTarget = document.getElementById('java-stack-target') as HTMLElement;
        const dartStack = document.getElementById('dart-stack') as HTMLElement;
        const dartStackTarget = document.getElementById('dart-stack-target') as HTMLElement;

        const devopsStack = document.getElementById('devops-stack') as HTMLElement;
        const devopsStackTarget = document.getElementById('devops-stack-target') as HTMLElement;

        let jsStackTitle = this.offset(jsStack);
        let javaStackTitle = this.offset(javaStack);
        let dartStackTitle = this.offset(dartStack);
        let devopsStackTitle = this.offset(devopsStack);

        
        if(jsStackTitle && !javaStackTitle && !dartStackTitle && !devopsStackTitle){
          jsStackTarget.style.color = '#3b78e7';
          javaStackTarget.style.color = 'black';
        }
        else if(jsStackTitle && javaStackTitle && !dartStackTitle && !devopsStackTitle){
          javaStackTarget.style.color = '#3b78e7';
          jsStackTarget.style.color = 'black';
          dartStackTarget.style.color = 'black';

        }
         else if(jsStackTitle && javaStackTitle && dartStackTitle && !devopsStackTitle){
          dartStackTarget.style.color = '#3b78e7';
          javaStackTarget.style.color = 'black';
          jsStackTarget.style.color = 'black';
          devopsStackTarget.style.color = 'black';
         }

         else if(jsStackTitle && javaStackTitle && dartStackTitle && devopsStackTitle){
          devopsStackTarget.style.color = '#3b78e7';
          dartStackTarget.style.color = 'black';
         }
    }
  };

  offset(elem: HTMLElement)
  {
      var docViewTop = window.scrollY;
      var docViewBottom = docViewTop + window.innerHeight;
  
      var elemTop = elem.offsetTop;
      var elemBottom = elemTop + elem.offsetHeight;
      return ((elemBottom <= docViewBottom) && (elemTop <= docViewTop));
    }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
}

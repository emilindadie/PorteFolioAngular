import { Component, OnInit } from '@angular/core';
import { ToggleSideNavService } from '../../shared/services/toggleSideNav.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private toggleSideNavService : ToggleSideNavService, private translateService : TranslateService) { 
  }

  ngOnInit() {
  }

  toggleSideNav(){
    this.toggleSideNavService.toggleSideNav(true);
  }

  changeLanguage(language:string){
    switch(language){
      case 'fr' : this.translateService.use('fr');
      break;

      case 'en' : this.translateService.use('en');
      break;

      default: this.translateService.use('fr');
      break;
    }
    this.translateService.use
  }
}

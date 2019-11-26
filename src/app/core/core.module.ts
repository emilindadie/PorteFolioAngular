import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core.routing.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { WebsiteComponent } from './website/website.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { TableLayoutComponent } from './table-layout/table-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CoreRoutingModule,
    SharedModule,
    NgbModule,
  ],
  declarations: [HeaderComponent,SidebarComponent, WebsiteComponent, TableLayoutComponent, FooterComponent],
  exports: [
    HeaderComponent,
    CoreRoutingModule,
    SharedModule,
    SidebarComponent,
    WebsiteComponent,
    TableLayoutComponent,
    FooterComponent
  ],
  entryComponents: [LoadingComponent]
})
export class CoreModule { }

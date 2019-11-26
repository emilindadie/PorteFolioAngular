import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatProgressSpinnerModule,} from '@angular/material';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingPageService } from './services/loadingPage.service';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { HomeComponent } from 'src/app/shared/components/home/home.component';
import { ToggleSideNavService } from './services/toggleSideNav.service';
import { SkillsComponent } from './components/skills/skills.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SkillsTableLayoutComponent } from './components/skills-table-layout/skills-table-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperiencesTableLayoutComponent } from './components/experiences-table-layout/experiences-table-layout.component';
import { AboutTableLayoutComponent } from './components/about-table-layout/about-table-layout.component';
import { RenderTableLayoutService } from './services/renderTableLayout.service';
import { JsSkillsInfosComponent } from './components/js-skills-infos/js-skills-infos.component';
import { JavaSkillsInfosComponent } from './components/java-skills-infos/java-skills-infos.component';
import { TrainingComponent } from './components/training/training.component';
import { TrainingTableLayoutComponent } from './components/training-table-layout/training-table-layout.component';
import { FooterComponent } from './footer/footer.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  imports: [
    MatInputModule,
    MatProgressSpinnerModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  declarations: [LoadingComponent, HomeComponent, SkillsComponent,PageLoaderComponent, SkillsTableLayoutComponent, ExperiencesComponent, ExperiencesTableLayoutComponent, AboutTableLayoutComponent, JsSkillsInfosComponent, JavaSkillsInfosComponent, TrainingComponent, TrainingTableLayoutComponent, FooterComponent],
  exports : [ 
    CommonModule,   
    ReactiveFormsModule,
    MaterialModule,
    LoadingComponent,
    HomeComponent,
    PageLoaderComponent,
    SkillsComponent,
    SkillsTableLayoutComponent,
    ExperiencesComponent,
    ExperiencesTableLayoutComponent,
    TrainingTableLayoutComponent,
    TranslateModule,
    FlexLayoutModule,
    AboutTableLayoutComponent,
  ],
  providers : [LoadingPageService, ToggleSideNavService, RenderTableLayoutService],
  entryComponents: [LoadingComponent]
})
export class SharedModule { }

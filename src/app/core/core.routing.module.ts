import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../shared/components/home/home.component';
import { SkillsComponent } from '../shared/components/skills/skills.component';
import { ExperiencesComponent } from '../shared/components/experiences/experiences.component';
import { TrainingComponent } from '../shared/components/training/training.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: HomeComponent,
    data : 
    {
      "page" : 'about',
      animation: 'Home',
    }
  },

  {
    path: 'skills',
    component: SkillsComponent,
    data : 
    {
      "page" : 'skills'
    }
  },

  {
    path: 'experiences',
    component: ExperiencesComponent,
    data : 
    {
      "page" : 'experiences'
    }
  },
  {
    path: 'training',
    component: TrainingComponent,
    data : 
    {
      "page" : 'training'
    }
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class CoreRoutingModule { }

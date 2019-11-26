import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaSkillsInfosComponent } from './java-skills-infos.component';

describe('JavaSkillsInfosComponent', () => {
  let component: JavaSkillsInfosComponent;
  let fixture: ComponentFixture<JavaSkillsInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaSkillsInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaSkillsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

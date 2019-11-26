import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSkillsInfosComponent } from './js-skills-infos.component';

describe('JsSkillsInfosComponent', () => {
  let component: JsSkillsInfosComponent;
  let fixture: ComponentFixture<JsSkillsInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsSkillsInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsSkillsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

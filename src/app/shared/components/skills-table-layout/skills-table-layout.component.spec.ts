import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTableLayoutComponent } from './skills-table-layout.component';

describe('SkillsTableLayoutComponent', () => {
  let component: SkillsTableLayoutComponent;
  let fixture: ComponentFixture<SkillsTableLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsTableLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

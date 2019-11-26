import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesTableLayoutComponent } from './experiences-table-layout.component';

describe('ExperiencesTableLayoutComponent', () => {
  let component: ExperiencesTableLayoutComponent;
  let fixture: ComponentFixture<ExperiencesTableLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesTableLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesTableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

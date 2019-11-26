import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTableLayoutComponent } from './training-table-layout.component';

describe('TrainingTableLayoutComponent', () => {
  let component: TrainingTableLayoutComponent;
  let fixture: ComponentFixture<TrainingTableLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingTableLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingTableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

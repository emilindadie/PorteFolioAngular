import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTableLayoutComponent } from './about-table-layout.component';

describe('AboutTableLayoutComponent', () => {
  let component: AboutTableLayoutComponent;
  let fixture: ComponentFixture<AboutTableLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTableLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTableLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

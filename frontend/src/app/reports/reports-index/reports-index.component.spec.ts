import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsIndexComponent } from './reports-index.component';

describe('ReportsIndexComponent', () => {
  let component: ReportsIndexComponent;
  let fixture: ComponentFixture<ReportsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

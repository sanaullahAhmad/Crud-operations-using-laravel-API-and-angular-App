import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesUpdateComponent } from './cities-update.component';

describe('CitiesUpdateComponent', () => {
  let component: CitiesUpdateComponent;
  let fixture: ComponentFixture<CitiesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

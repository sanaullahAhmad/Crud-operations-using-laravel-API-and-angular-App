import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesIndexComponent } from './countries-index.component';

describe('CountriesIndexComponent', () => {
  let component: CountriesIndexComponent;
  let fixture: ComponentFixture<CountriesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

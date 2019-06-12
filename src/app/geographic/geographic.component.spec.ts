import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicComponent } from './geographic.component';

describe('GeographicComponent', () => {
  let component: GeographicComponent;
  let fixture: ComponentFixture<GeographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

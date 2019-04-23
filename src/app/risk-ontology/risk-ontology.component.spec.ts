import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskOntologyComponent } from './risk-ontology.component';

describe('RiskOntologyComponent', () => {
  let component: RiskOntologyComponent;
  let fixture: ComponentFixture<RiskOntologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskOntologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskOntologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

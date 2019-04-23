import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaOntologyComponent } from './para-ontology.component';

describe('ParaOntologyComponent', () => {
  let component: ParaOntologyComponent;
  let fixture: ComponentFixture<ParaOntologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaOntologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaOntologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

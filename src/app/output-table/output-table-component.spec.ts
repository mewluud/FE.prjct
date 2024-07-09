import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTableComponentComponent } from './output-table-component';

describe('OutputTableComponentComponent', () => {
  let component: OutputTableComponentComponent;
  let fixture: ComponentFixture<OutputTableComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputTableComponentComponent]
    });
    fixture = TestBed.createComponent(OutputTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

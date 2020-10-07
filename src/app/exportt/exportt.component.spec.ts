import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporttComponent } from './exportt.component';

describe('ExporttComponent', () => {
  let component: ExporttComponent;
  let fixture: ComponentFixture<ExporttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExporttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTooltipComponent } from './worker-tooltip.component';

describe('WorkerTooltipComponent', () => {
  let component: WorkerTooltipComponent;
  let fixture: ComponentFixture<WorkerTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

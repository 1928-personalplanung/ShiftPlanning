import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerChipComponent } from './worker-chip.component';

describe('WorkerChipComponent', () => {
  let component: WorkerChipComponent;
  let fixture: ComponentFixture<WorkerChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

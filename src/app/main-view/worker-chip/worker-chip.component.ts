import {Component, Input, OnInit} from '@angular/core';

import {Worker} from '../../dto/worker';

@Component({
  selector: 'sp-worker-chip',
  templateUrl: './worker-chip.component.html',
  styleUrls: ['./worker-chip.component.scss']
})
export class WorkerChipComponent implements OnInit {

  private pWorker: Worker;
  @Input('worker')
  get worker(): Worker {
    return this.pWorker;
  }
  set worker(value: Worker) {
    this.pWorker = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

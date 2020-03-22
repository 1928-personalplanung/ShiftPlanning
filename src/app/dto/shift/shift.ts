import { Worker } from '../worker/worker';
import { Constrain } from '../constrain';

export interface Shift {
  id: number;
  shiftTypeId: number;
  constrains: Constrain[];
  startDate: number;
  endDate: number;
  worker?: Worker[];
  forLocalMockWorkerIDs?: number[];
}

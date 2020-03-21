import { Worker } from './worker';

export interface Shift {
  id: number;
  shiftTypeId: number;
  startDate: number;
  endDate: number;
  worker: Worker[];
}

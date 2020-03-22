import { Tag } from './tag';

export interface Worker {
  id: number;
  workModeId: number;
  disciplineId: number;
  name: string;
  stationId: number;
  teamId: number;
  tags: Tag[]; // Backend müsste die TAGs n Tage in die Vergangenheit und Zukunft
  hoursWorkedInCurrentMonth: number;
  score: number;
}

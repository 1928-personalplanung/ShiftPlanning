import { Tag } from '../tag/tag';
import { WorkMode } from './work-mode';

export interface Worker {
  id: number;
  workModeId?: number;
  workMode?: WorkMode;
  disciplineId?: number;
  name: string;
  stationId?: number;
  teamId?: number;
  tags: Tag[]; // Backend müsste die TAGs n Tage in die Vergangenheit und Zukunft
  hoursWorkedInCurrentMonth: number;
  score: number;
}

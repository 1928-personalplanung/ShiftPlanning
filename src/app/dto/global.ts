export interface Global {
  em: string;
}

export declare type IdType = number | string;
export declare type DateType = Date | string;

export interface TagType {
  id: IdType;
  name: 'krank' | 'urlaub';
  contagious: boolean;
  length: number; // ????
}

export interface Tag {
  id: IdType;
  workerId: IdType;
  tagTypeId: IdType;
  startDate: DateType;
  endDate: DateType;
}

export interface Worker {
  id: IdType;
  workModeId: IdType;
  disciplineId: IdType;
  name: string;
  stationId: IdType;
  teamId: IdType;
}

export interface Station {
  id: IdType;
  name: string;
}



export interface Team {
  id: IdType;
  name: string;
}

export interface Shift {
  id: IdType;
  shiftTypeId: IdType;
  startDate: DateType;
  endDate: DateType;
}

export interface ShiftToWorker {
  id: IdType;
  shiftId: IdType;
  workerId: IdType;
}

export interface Discipline {
  id: IdType;
  name: string;
  shiftTypeId: IdType;
}

export interface ShiftType {
  id: IdType;
  name: string;
  constrains: any;
}

export interface WorkMode {
  id: IdType;
  name: string;
  hoursPerMonth: any;
}




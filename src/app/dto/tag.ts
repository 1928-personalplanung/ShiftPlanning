export interface Tag {
  id: number;
  workerId: number;
  tagTypeId: number;
  startDate: number;    // sollen wir number Unixzeit von 1970?
  endDate: number;
  description?: string;
}

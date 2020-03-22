import { TagType } from './tag-type';

export interface Tag {
  id: number;
  workerId: number;
  tagTypeId: number;
  tagType?: TagType;
  startDate: number;    // sollen wir number Unixzeit von 1970?
  endDate: number;
  description?: string;
}

import { TagTypes } from './tag-types.enum';

export interface TagType {
  id: number;
  type: TagTypes;
  name: string;
  contagious: boolean;
  defaultDurationInSeconds: number;
}

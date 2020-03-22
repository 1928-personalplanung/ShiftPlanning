import { Constrain } from './constrain';

export interface ShiftType {
  id: number;
  name: string;
  constrains?: Constrain[];
  template?: any; // Vorlange wie man 1,2,3 Schichten innerhalb der SchichtenTabelle erzeugt
}

export type DrawMode = 'gt' | 'pred' | 'erase';

export interface GridState {
  gt: boolean[];
  pred: boolean[];
}
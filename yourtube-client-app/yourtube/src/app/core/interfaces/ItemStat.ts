import { Statistics } from './Statistics';

export interface ItemStat {
  kind: string;
  etag: string;
  id: string;
  statistics: Statistics;
}

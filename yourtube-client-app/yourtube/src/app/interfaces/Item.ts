import { Snippet } from './Snippet';
import { Statistics } from './Statistics';

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

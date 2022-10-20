import { Id } from './Id';
import { Snippet } from './Snippet';
import { Statistics } from './Statistics';

export interface Item {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  statistics: Statistics;
}

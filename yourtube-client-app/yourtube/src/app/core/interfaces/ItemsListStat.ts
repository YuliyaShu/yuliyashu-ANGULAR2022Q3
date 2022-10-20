import { PageInfo } from './PageInfo';
import { ItemStat } from './ItemStat';

export interface ItemsListStat {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: ItemStat[];
}

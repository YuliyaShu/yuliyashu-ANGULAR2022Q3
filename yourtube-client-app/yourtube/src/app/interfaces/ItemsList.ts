import { PageInfo } from './PageInfo';
import { Item } from './Item';

export interface ItemsList {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}

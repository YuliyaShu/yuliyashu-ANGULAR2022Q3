import { PageInfo } from './PageInfo';
import { Item } from './Item';

export interface ItemsList {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode?: string;
  pageInfo: PageInfo;
  items: Item[];
}

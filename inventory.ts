/**
 * Inventory and InventoryLines interface for stock
 * DO NOT MODIFY THIS FILE, EXTEND THE INTERFACE INSTEAD
*/
import { Location } from './location'
import { Products } from '../ngx-tryton-product-interface/products'

export interface Inventory {
  id: number;
  company?: string;
  date: string;
  location: Location;
  state: string;
  lines?: InventoryLines[];
  lost_found : number;
}

export interface InventoryLines {
  id: number;
  product: Products;
  quantity: number;
  expected_quantity?: number;
  lot?: string;
  'lot.rec_name'?: string;
}

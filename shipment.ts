/**
 * Shipment interface for stock
 * DO NOT MODIFY THIS FILE, EXTEND THE INTERFACE INSTEAD
*/

export interface InternalShipment {
  id: number,
  state: string,
  from_location: number,
  to_location: number,
  company: number,
  reference: string,
  planned_date?: any,
  planned_start_date?: any,
  number?: string,
  moves?: any[],
  outgoing_moves?: any[],
  incoming_moves?: any[],
  comment?: string
}

export interface InternalShipmentLines {
  id: number,
  product: number,
  'product.rec_name': string,
  max_quantity: number,
  quantity: number,
  served_quantity: number,
  'product.template.cost_price': number,
}

export interface CustomerShipment {
  id: number,
  state: string,
  from_location: number,
  to_location: number,
  company: number,
  reference: string,
  planned_date?: any,
  planned_start_date?: any,
  number?: string,
  moves?: any[],
  outgoing_moves?: any[],
  inventory_moves?: any[],
  comment?: string
}

export interface CustomerShipmentLines {
  id: number,
  product: number,
  'product.rec_name': string,
  max_quantity: number,
  quantity: number,
  served_quantity: number,
  'product.template.cost_price': number,
}

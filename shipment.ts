/**
 * Shipment interface for stock
 * DO NOT MODIFY THIS FILE, EXTEND THE INTERFACE INSTEAD
*/

export interface Shipment {
    id: number,
    state: string,
    from_location: number,
    to_location: number,
    company: number,
    reference: string,
    planned_date?: any,
    planned_start_date: any,
    code?: string,
    moves?: any[]
}

export interface ShipmentLines {
    id: number,
    product: number,
    'product.rec_name': string,
    max_quantity: number,
    quantity: number,
    served_quantity: number,
    'product.template.cost_price': number,
}

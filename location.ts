/**
 * Locaton interface for stock
 * DO NOT MODIFY THIS FILE, EXTEND THE INTERFACE INSTEAD
*/

export interface Location {
    id: number;
    name: string;
    code: string;
    'parent.name': string;
}

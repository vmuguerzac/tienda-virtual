export interface Producto {
    id:number;
    nombreProducto:string;
    descripcion:string;
    precio:number;
    sinStock:boolean;
    imagenProducto:string;
    categoriaId:number|null;
}

export type ProductoRequest = Omit<Producto, 'id'>;
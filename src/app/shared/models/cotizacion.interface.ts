export interface CotizacionI{
    fecha: Date;
    nombre: string;
    envasedesc: string;
    cantidad: number;
    razonsocial: string;
    email: string;
    telefono: number;
    interno?: number
}
export interface ServicioI{
    fecha: any,
    nombreempresa: string,
    nombrecontacto: string,
    telefono: string,
    email?: string,
    nombreproducto: string,
    grupo: string,
    cantidad: number,
    unidad: string,
    tipotrabajo: string,
    tipoenvase: string,
    color: string,
    medidaenvase: string,
    colorcaja: string,
    ndelote: string,
    fechafabricacion: Date,
    fechavencimiento: Date,
    otros?: string
}
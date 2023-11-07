import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type GeneratorSets ={
    title:string,
    link:string,
    image?:string
}
export type ProductCard = {
    image:any,
    title:string|undefined,
    brand:string|undefined,
    link:string
}
export type ContactCard = {
    title:string,
    desc:string,
    linkText:string,
    link:string
}
export type ProductType = {
    name?:string|undefined,
    brand?:string|undefined,
    brandCode?:string|undefined,
    dataSheet?:string|undefined,
    id?:string|undefined,
    image:string
}
export type CategoryType ={
    name:string,
    id:string,
    link:string,
    image:string
}
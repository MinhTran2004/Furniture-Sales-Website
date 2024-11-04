export type imageProduct = {
    imageProduct: string;
    color: string;
}

export interface Product {
    _id: string,
    name: string;
    image: imageProduct[];
    price: string;
    sale: string;
    label: string;
    quantity: string;
    type: string;
}

export default class ProductModel {
    name: string;
    image: imageProduct[];
    price: string;
    sale: string;
    label: string;
    quantity: string;
    type: string;

    constructor(name: string = "", image: imageProduct[], price: string = "", sale: string = "", label: string = "", quantity: string = "", type: string = "") {
        this.name = name;
        this.image = image;
        this.price = price;
        this.sale = sale;
        this.label = label;
        this.quantity = quantity;
        this.type = type;
    }
}
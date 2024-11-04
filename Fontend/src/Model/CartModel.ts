export interface Cart {
    _id: string;
    idProduct: string;
    image: string;
    name: string;
    color: string;
    price: string;
    quantity: number;
    status: string;
}

export class CartModel {
    idProduct: string;
    image: string;
    name: string;
    color: string;
    price: string;
    quantity: number;
    status: string;

    constructor(idProduct: string, image: string, name: string, color: string, price: string, quantity: number, status: string) {
        this.idProduct = idProduct;
        this.image = image;
        this.name = name;
        this.color = color;
        this.price = price;
        this.quantity = quantity;
        this.status = status;
    }
}


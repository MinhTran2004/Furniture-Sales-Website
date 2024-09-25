export class CartModel {
    id: string;
    idProduct: string;
    image: string;
    name: string;
    color: string;
    sale: string;
    quantity: string;
    status: string;

    constructor(id: string = "", idProduct: string = "", image: string = "", name: string = "", color: string = "", sale: string = "", quantity: string = "", status: string = "") {
        this.id = id;
        this.idProduct = idProduct;
        this.image = image;
        this.name = name;
        this.color = color;
        this.sale = sale;
        this.quantity = quantity;
        this.status = status;
    }
}


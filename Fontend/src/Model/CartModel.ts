export class CartModel {
    _id: string;
    idProduct: string;
    image: string;
    name: string;
    color: string;
    sale: string;
    quantity: string;
    status: string;

    constructor(_id: string = "", idProduct: string = "", image: string = "", name: string = "", color: string = "", sale: string = "", quantity: string = "", status: string = "") {
        this._id = _id;
        this.idProduct = idProduct;
        this.image = image;
        this.name = name;
        this.color = color;
        this.sale = sale;
        this.quantity = quantity;
        this.status = status;
    }
}


type imageProduct = {
    imageProduct: string;
    color:string;
}

export class ProductModel{
    _id: string;
    name: string;
    image: imageProduct[];
    price: string;
    sale: string;
    label: string;
    quantity: string;
    sell: string;
    type: string;

    constructor(_id: string = "", name: string = "", image: imageProduct[], price:string = "", sale: string = "", label:string = "", quantity:string = "", sell:string = "", type:string = ""){
        this._id = _id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.sale =sale;
        this.label = label;
        this.quantity = quantity;
        this.sell = sell;
        this.type = type;
    }
}
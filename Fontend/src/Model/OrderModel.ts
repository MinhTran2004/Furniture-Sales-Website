export class OrderModel {
    _id?:string = "";
    idCart?:string = "";
    total?:string = "";
    date?:string = "";

    constructor(id?:string, idCart?:string, total?:string, date?:string){
      this._id = id;
      this.idCart = idCart;
      this.total = total;  
      this.date = date;
    }

}
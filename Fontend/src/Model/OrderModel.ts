
export class OrderModel {
    idCart?:string = "";
    total?:string = "";
    date?:string = "";

    constructor(idCart?:string, total?:string, date?:string){
      this.idCart = idCart;
      this.total = total;  
      this.date = date;
    }

}
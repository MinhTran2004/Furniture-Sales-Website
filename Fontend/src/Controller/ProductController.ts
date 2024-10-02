import { ProductSevice } from "../Sevice/ProductSevice";

export class ProductController{
    static async getAllProduct () {
        try{
            const reponse = await ProductSevice.getAllProduct();
            return reponse;
        }catch(err){
            console.log(err);
        }
    }
    static async getAllProductByFilter(filter?:string, data?:string, skip?:number, limit?:number){
        try{
            const reponse = await ProductSevice.getAllProductByFilter(filter, data, skip, limit);
            return reponse;
        }catch(err){
            console.log(err);
        }
    }
}
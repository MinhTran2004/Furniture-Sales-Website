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
    static async getAllProductByFilter(filter?:String, data?:String){
        try{
            const reponse = await ProductSevice.getAllProductByFilter(filter, data);
            return reponse;
        }catch(err){
            console.log(err);
        }
    }
}
import axios from "axios";

export class ProductSevice{
    static async getAllProduct(){
        try{
            return (await axios.get(`http://localhost:5000/product/getAllProduct`)).data;
        }catch(err){
            console.log(err);
        }
    }

    static async getProductSize(size:number){
        try{
            return (await axios.get(`http://localhost:5000/product/getProductSize`, {
                params : {
                    limit: 5,
                    skip: size,
                }
            })).data;
        }catch(err){
            console.log(err);
        }
    }
}
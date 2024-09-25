import axios from "axios";

export class ProductSevice{
    //lat tat ca san pham
    static async getAllProduct(){
        try{
            const reponse = await axios.get(`http://localhost:5000/product/getAllProduct`)
            return reponse.data;;
        }catch(err){
            console.log(err);
        }
    }

    //lay san pham va loc san pham
    static async getAllProductByFilter(filter?:String, data?:String){
        try{
            const reponse = await axios.get(`http://localhost:5000/product/getAllProductByFilter?filter=${filter}&data=${data}`);
            return reponse.data;
        }catch(err){
            console.log(err);
        }
    }
}
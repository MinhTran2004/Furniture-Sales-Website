import axios from "axios";

export class ProductSevice {
    //lat tat ca san pham
    static async getAllProduct() {
        try {
            const reponse = await axios.get(`http://localhost:5000/product/getAllProduct`)
            return reponse.data;;
        } catch (err) {
            console.log(err);
        }
    }
    // ?filter=${filter}&data=${data}
    //lay san pham va loc san pham
    static async getAllProductByFilter(filter?: string, data?: string, skip?: number, limit?: number) {
        try {
            const reponse = await axios.get(`http://localhost:5000/product/getAllProductByFilter`, {
                params: {
                    filter: filter,
                    data: data,
                    skip: skip,
                    limit: limit,
                }
            });
            return reponse.data;
        } catch (err) {
            console.log(err);
        }
    }
}
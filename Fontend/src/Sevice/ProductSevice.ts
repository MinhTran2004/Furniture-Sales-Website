import axios from "axios";

export class ProductSevice {
    static url = 'http://localhost:5000/product';

    // lấy sản phẩm theo thể loại và số lượng
    static async getAllProductBySizeAndType(size: number, type: string){
        try {
            const reponse = await axios.get(`${this.url}/getAllProductBySizeAndType`, {
                params: {
                    size: size,
                    type: type,
                }
            })
            return reponse.data;
        } catch (err) {
            console.log(err);
        }
    }
    //lay san pham va loc san pham
    static async getAllProductBySize(skip?: number, limit?: number) {
        try {
            const reponse = await axios.get(`${this.url}/getAllProductBySizeAndFilter`, {
                params: {
                    skip: skip,
                    limit: limit,
                }
            });
            return reponse.data;
        } catch (err) {
            console.log(err);
        }
    }

    //lay san pham va loc san pham
    static async getAllProductBySizeAndFilter(filter?: string, detailtype?: string, skip?: number, limit?: number) {
        try {
            const reponse = await axios.get(`${this.url}/getAllProductBySizeAndFilter`, {
                params: {
                    filter: filter,
                    detailtype: detailtype,
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
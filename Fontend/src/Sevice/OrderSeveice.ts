import axios from "axios";
import { OrderModel } from "../Model/OrderModel";

export default class OrderSevice {
    static async addOrder(data: OrderModel) {
        try {
            await axios.post(`http://localhost:5000/order/addOrder`, data);
        } catch (err) {
            console.log(err);
        }
    }

    static async getAllOrder() {
        try {
            const reponse = (await axios.get(`http://localhost:5000/order/getAllOrder`)).data;
            return reponse;
        } catch (err) {
            console.log(err);
        }
    }

    static async getOrderById (id:string) {
        try{
            const reponse = (await axios.get(`http://localhost:5000/order/getOrderByid/${id}`)).data;
            return reponse;
        }catch(err){
            console.log(err);
        }
    }
}
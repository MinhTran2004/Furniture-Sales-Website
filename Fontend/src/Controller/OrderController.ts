import { OrderModel } from "../Model/OrderModel";
import OrderSevice from "../Sevice/OrderSeveice";

export default class OrderController {
    static async addOrder(data: OrderModel) {
        try {
            await OrderSevice.addOrder(data);
        } catch (err) {
            console.log(err);
        }
    }

    static async getAllOrder() {
        try {
            const reponse = await OrderSevice.getAllOrder();
            return reponse;
        } catch (err) {
            console.log(err);
        }
    }

    static async getOrderById(id: string) {
        try {
            const reponse = await OrderSevice.getOrderById(id);
            return reponse;
        } catch (err) {
            console.log(err);
        }
    }
}
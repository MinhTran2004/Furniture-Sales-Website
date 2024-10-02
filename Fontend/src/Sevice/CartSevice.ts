import axios from "axios";
import { CartModel } from "../Model/CartModel";

export class CartSevice {

    static async addCart(data: CartModel) {
        try {
            await axios.post('http://localhost:5000/cart/addCart', data);
        } catch (err) {
            console.log(err);
        }
    }

    static async getAllCart() {
        try {
            return (await axios.get('http://localhost:5000/cart/getAllCart')).data;
        } catch (err) {
            console.log(err);
        }
    }

    static async updateCartQuantityById(id:string, quantity:string) {
        try{
            await axios.patch(`http://localhost:5000/cart/updateCartQuantityById/${id}`, {quantity: quantity});
            return this.getAllCart();
        }catch(err){
            console.log(err);
        }
    }

    static async deleteCartById(id:string){
        try{
            await axios.delete(`http://localhost:5000/cart/deleteCartById/${id}`);
            return this.getAllCart();
        }catch(err){
            console.log(err);
        }
    }
}
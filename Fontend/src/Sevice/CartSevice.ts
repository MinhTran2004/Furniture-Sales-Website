import axios from "axios";
import { CartModel } from "../Model/CartModel";

export class CartSevice {

    static url = "http://localhost:5000/cart"

    static async addCart(data: CartModel) {
        try {
            const reponse = await axios.post(`${this.url}/addCart`, data);
            return reponse;
        } catch (err) {
            console.log(err);
        }
    }

    static async getAllCart() {
        try {
            return (await axios.get(`${this.url}/getAllCart`)).data;
        } catch (err) {
            console.log(err);
        }
    }

    static async updateCartQuantityById(id:string, quantity:string) {
        try{
            await axios.patch(`${this.url}/updateCartQuantityById/${id}`, {quantity: quantity});
            return this.getAllCart();
        }catch(err){
            console.log(err);
        }
    }

    static async deleteCartById(id:string){
        try{
            await axios.delete(`${this.url}/deleteCartById/${id}`);
            return this.getAllCart();
        }catch(err){
            console.log(err);
        }
    }
}
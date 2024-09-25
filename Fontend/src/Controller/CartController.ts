import { CartModel } from "../Model/CartModel";
import { CartSevice } from "../Sevice/CartSevice";

export class CartController{
    static async addCart(data: CartModel) {
        try {
            await CartSevice.addCart(data);
        } catch (err) {
            console.log(err);
        }
    }

    static async getAllCart() {
        try {
            const reponse = await CartSevice.getAllCart();
            return reponse;
        } catch (err) {
            console.log(err);
        }
    }

    static async updateCartQuantityById(id:string, quantity:string) {
        try{
            const reponse = await CartSevice.updateCartQuantityById(id, quantity);
            return reponse;
        }catch(err){
            console.log(err);
        }
    }

    static async deleteCartById(id:string){
        try{
            const reponse = await CartSevice.deleteCartById(id);
            return reponse;
        }catch(err){
            console.log(err);
        }
    }
}
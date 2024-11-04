import axios from "axios";
import { useEffect, useState } from "react";
import { CartSevice } from "../../Sevice/CartSevice";
import { Cart } from "../../Model/CartModel";
import { GioHangComponent } from "../../Component/GioHangComponent";

const GioHangCart = () => {
    const [dataCart, setDataCart] = useState<Cart[]>([]);
    const [total, setToTal] = useState(0);

    const getAllCart = async () => {
        const reponse = await CartSevice.getAllCart();
        let sum = 0;
        reponse.map((item: Cart) => sum = sum + (Number(item.price) * Number(item.quantity)));
        const convertSum = GioHangComponent.ConvertMoney(sum);
        setToTal(convertSum);
        setDataCart(reponse);
    }

    const updateCartQuantityById = async (id: string, quantity: string) => {
        await CartSevice.updateCartQuantityById(id, quantity);
        await getAllCart()
    }

    const deleteCartById = async (id: string) => {
        await CartSevice.deleteCartById(id);
        await getAllCart()
    }

    const changeQuantity = async (id: string, quantity: number, status: boolean) => {
        if (status) {
            await updateCartQuantityById(id, (quantity + 1).toString())
        } else {
            if (quantity < 2) {
                await deleteCartById(id)
            } else {
                await updateCartQuantityById(id, (quantity - 1).toString())
            }
        }
    }

    useEffect(() => {
        getAllCart();
    }, [])

    return {
        dataCart, total,
        getAllCart, updateCartQuantityById, deleteCartById, changeQuantity,
    }
}

export default GioHangCart;
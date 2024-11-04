import { useLocation } from "react-router-dom";
import { imageProduct, Product } from "../../Model/ProductModel";
import { useState } from "react";
import { CartModel } from "../../Model/CartModel";
import { CartSevice } from "../../Sevice/CartSevice";

const ThongtinProduct = () => {
    const [id, setId] = useState('');
    const [idProduct, setIdProduct] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [status, setStatus] = useState("Đang sử dụng");

    const location: Product = useLocation().state;
    const [indexInfoProduct, setIndexInforProduct] = useState(0);

    const changeQuantity = (status: Number) => {
        if (status === 0) {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        } else {
            setQuantity(quantity + 1);
        }
    }

    const addCart = async () => {
        const cart = new CartModel(location._id, location.image[indexInfoProduct].imageProduct, location.name, location.image[indexInfoProduct].color, location.price, quantity, status);
        const reponse = await CartSevice.addCart(cart);
        console.log(reponse);
    }

    return {
        id, idProduct, image, name, color, price, quantity, status,
        setId, setIdProduct, setImage, setName, setColor, setPrice, setQuantity, setStatus,
        location, indexInfoProduct,
        setIndexInforProduct, changeQuantity,addCart,
    }
}

export default ThongtinProduct;
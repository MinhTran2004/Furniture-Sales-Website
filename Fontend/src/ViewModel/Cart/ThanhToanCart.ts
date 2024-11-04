import { useEffect, useRef, useState } from "react";
import { Cart } from "../../Model/CartModel";
import { CartSevice } from "../../Sevice/CartSevice";
import { GioHangComponent } from "../../Component/GioHangComponent";

const ThanhToanCart = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [note, setNote] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const [errorAddress, setErrorAddress] = useState("");

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

    const checkData = () => {
        const fields = [
            { value: name, setError: setErrorName, fieldName: "Tên" },
            { value: email, setError: setErrorEmail, fieldName: "Email" },
            { value: phone, setError: setErrorPhone, fieldName: "Số điện thoại" },
            { value: address, setError: setErrorAddress, fieldName: "Địa chỉ" }
        ];
        let check = true;
        fields.forEach(({ value, setError, fieldName }) => {
            if (value.length === 0) {
                setError(`Không để trống ô nhập ${fieldName}`);
                check = false;
            } else {
                setError("");
            }
        });
    };

    useEffect(() => {
        getAllCart();
    })


    return{
        email, name, phone, address, note, errorEmail, errorName, errorPhone, errorAddress,
        setEmail, setName, setPhone, setAddress, setNote, setErrorEmail, setErrorName, setErrorPhone, setErrorAddress,
        total, dataCart,
        setToTal, checkData,
    }
}

export default ThanhToanCart;
import { Accordion } from "react-bootstrap";
import styles from "../CSS/ThanhToan.module.css";
import { useEffect, useRef, useState } from "react";
import { CartModel } from "../Model/CartModel";
import { CartController } from "../Controller/CartController";
import { ThanhToanComponent } from "../Component/ThanhToanComponent";
import { OrderModel } from "../Model/OrderModel";
import { useNavigate } from "react-router-dom";
import OrderController from "../Controller/OrderController";

export default function ThanhToan() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [note, setNote] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const [errorAddress, setErrorAddress] = useState("");
    const [total, setTotal] = useState("");

    const navigate = useNavigate();
    const [data, setData] = useState<CartModel[]>([]);
    const idCart = useRef("");

    const getAllProductOfCart = async () => {
        try {
            let sum = 0;
            const reponse = await CartController.getAllCart();
            setData(reponse);
            reponse.map((item: CartModel) => (
                sum = sum + (Number(item.sale) * Number(item.quantity))
            ))
            setTotal(sum.toString());

            reponse.map((item:any) => (
                idCart.current = idCart.current + item._id + ","
            ))
            idCart.current = idCart.current.slice(0, -1)
        } catch (err) {
            console.log(err);
        }
    }

    const addOrder = async () => {
        const date = new Date().toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        try {
            const order = new OrderModel(undefined, idCart.current, total, date);
            await OrderController.addOrder(order);
            navigate('/DonHang');
        } catch (err) {
            console.log(err);
        }
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
        if (check) {
            addOrder();
        }
    };

    useEffect(() => {
        getAllProductOfCart();
    }, [])

    return (
        <div className={styles.container_main}>
            {/* product */}
            <div className={styles.container_product_max}>
                <div>
                    <p className={styles.title_product}>Đơn hàng ({data.length} sản phẩm )</p>
                    <div className={styles.line} />
                    <div className={styles.list_porduct}>
                        {data.map((item, index) => (
                            <ThanhToanComponent.ItemProduct key={index} {...item} />
                        ))}
                    </div>

                    <div className={styles.line} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                        <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tạm tính</p>
                        <p className={styles.ship_product}>{ThanhToanComponent.ConvertMoney(total)}₫</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                        <p className={styles.ship_product} style={{ fontWeight: 500 }}>Phí vận chuyển</p>
                        <p className={styles.ship_product}>Miễn phí</p>
                    </div>

                    <div className={styles.line} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                        <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tổng tiền</p>
                        <p className={styles.total_product}>{ThanhToanComponent.ConvertMoney(total)}₫</p>
                    </div>
                </div>
            </div>

            <div className={styles.container_product_min}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className={styles.custom_header}>Đơn hàng (1 sản phâm)</Accordion.Header>
                        <Accordion.Body>
                            {data.map((item, index) => (
                                <ThanhToanComponent.ItemProduct key={index} {...item} />
                            ))}
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px' }}>
                                <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tạm tính</p>
                                <p className={styles.ship_product}>{ThanhToanComponent.ConvertMoney(total)}₫</p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                                <p className={styles.ship_product} style={{ fontWeight: 500 }}>Phí vận chuyển</p>
                                <p className={styles.ship_product}>Miễn phí</p>
                            </div>

                            <div className={styles.line} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                                <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tổng tiền</p>
                                <p className={styles.total_product}>{ThanhToanComponent.ConvertMoney(total)}₫</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>



            </div>

            <div className={styles.container_info_user}>
                <p className={styles.title_product}>Thông tin nhận hàng</p>
                <input value={name} type="text" placeholder="Họ và tên" className={styles.input_info} onChange={(text) => setName(text.target.value)} /> <br />
                <p style={{ textAlign: "end", color: 'red' }}>{errorEmail}</p>
                <input value={email} type="email" placeholder="Email" className={styles.input_info} onChange={(text) => setEmail(text.target.value)} /> <br />
                <p style={{ textAlign: "end", color: 'red' }}>{errorName}</p>
                <input value={phone} type="number" placeholder="Số điện thoại" className={styles.input_info} onChange={(text) => setPhone(text.target.value)} /> <br />
                <p style={{ textAlign: "end", color: 'red' }}>{errorPhone}</p>
                <input value={address} type="text" placeholder="Địa chỉ" className={styles.input_info} onChange={(text) => setAddress(text.target.value)} /> <br />
                <p style={{ textAlign: "end", color: 'red' }}>{errorAddress}</p>
                <textarea value={note} placeholder="Ghi chú" className={styles.input_info} onChange={(text) => setNote(text.target.value)}></textarea>
                <button className={styles.btn_buy} onClick={() => checkData()}>Đặt hàng</button>
            </div>
        </div>
    )
}
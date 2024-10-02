import { useEffect, useState } from "react";
import styles from "../CSS/DonHang.module.css";
import { OrderModel } from "../Model/OrderModel";
import OrderController from "../Controller/OrderController";
import { CartModel } from "../Model/CartModel";

export default function DonHang() {
    const [data, setData] = useState<OrderModel[]>([]);

    const ConvertMoney = (price: any) => {
        if (price) {
            const convertMoney = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            return convertMoney;
        } else {
            return 0;
        }
    }

    const getAllOrder = async () => {
        try {
            const reponse = await OrderController.getAllOrder();
            setData(reponse);
            // eslint-disable-next-line
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllOrder();
    }, [])

    const ItemProduct = (item: any) => {
        const [cart, setCart] = useState<CartModel>();
        const getCartById = async () => {
            try {
                const reponse = await OrderController.getOrderById(item.item);
                setCart(reponse);
            } catch (err) {
                console.log(err);
            }
        }

        useEffect(() => {
            getCartById();
        }, [])

        return (
            <div style={{ display: 'flex', marginBottom: 10 }}>
                <div className={styles.container_image}>
                    <img src={cart?.image} alt="" className={styles.image_product} />
                </div>
                <div style={{ flex: 1, marginLeft: 10 }}>
                    <p className={styles.name_product}>{cart?.name}</p>
                    <div style={{ display: 'flex', marginTop: 18, alignItems: 'end', justifyContent: 'space-between' }}>
                        {item.color ?
                            <p className={styles.color_product} style={{ color: '#7a7a7a' }}>{cart?.color}</p>
                            :
                            <p className={styles.color_product} style={{ color: '#7a7a7a' }}>""</p>
                        }
                        <p className={styles.price_product}>{ConvertMoney(cart?.sale)}</p>
                    </div>
                </div>
            </div>
        )
    }

    const ItemOrder = (item: OrderModel) => {
        const arrIdCart = item.idCart?.split(",");
        return (
            <div className={styles.container_order}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ fontSize: 18 }}>Mã đơn hàng: {item._id}</p>
                    <p style={{ fontSize: 18 }}>Trạng thái: <span style={{ color: 'red' }}>Đang chuẩn bị</span></p>
                </div>

                <div className={styles.line} />

                {arrIdCart?.map((item: any, index) => (
                    <ItemProduct key={index} item={item} />
                ))}

                <div className={styles.line} />
                <div style={{ textAlign: 'end' }}>
                    <p className={styles.total_product}>Ngày tạo đơn: {item.date}</p>
                    <p className={styles.total_product}>Thành tiền: {ConvertMoney(item.total)}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container_main}>
            <h2 style={{ textAlign: 'center', marginBottom: 15 }}>Đơn hàng của bạn</h2>
            {data.map((item, index) => (
                <ItemOrder key={index} {...item} />
            ))}

        </div>
    )
}
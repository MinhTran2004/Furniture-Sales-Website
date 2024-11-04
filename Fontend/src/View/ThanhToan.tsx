import { Accordion } from "react-bootstrap";
import styles from "../CSS/ThanhToan.module.css";
import { useEffect, useRef, useState } from "react";
import { CartModel } from "../Model/CartModel";
import { ThanhToanComponent } from "../Component/ThanhToanComponent";
import { OrderModel } from "../Model/OrderModel";
import { useNavigate } from "react-router-dom";
import OrderController from "../Controller/OrderController";
import ThanhToanCart from "../ViewModel/Cart/ThanhToanCart";

export default function ThanhToan() {
    const viewModel = ThanhToanCart();

    // const navigate = useNavigate();
    // const addOrder = async () => {
    //     const date = new Date().toLocaleDateString('vi-VN', {
    //         day: '2-digit',
    //         month: '2-digit',
    //         year: 'numeric',
    //     });
    //     try {
    //         const order = new OrderModel(undefined, idCart.current, total, date);
    //         await OrderController.addOrder(order);
    //         navigate('/DonHang');
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    
    return (
        <div className={styles.container_main}>
            {/* product */}
            <div className={styles.container_product_max}>
                <div>
                    <p className={styles.title_product}>Đơn hàng ({viewModel.dataCart.length} sản phẩm )</p>
                    <div className={styles.line} />
                    <div className={styles.list_porduct}>
                        {viewModel.dataCart.map((item, index) => (
                            <ThanhToanComponent.ItemProduct key={index} {...item} />
                        ))}
                    </div>

                    <div className={styles.line} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                        <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tạm tính</p>
                        <p className={styles.ship_product}>{viewModel.total}₫</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                        <p className={styles.ship_product} style={{ fontWeight: 500 }}>Phí vận chuyển</p>
                        <p className={styles.ship_product}>Miễn phí</p>
                    </div>

                    <div className={styles.line} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                        <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tổng tiền</p>
                        <p className={styles.total_product}>{viewModel.total}₫</p>
                    </div>
                </div>
            </div>

            <div className={styles.container_product_min}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className={styles.custom_header}>Đơn hàng (1 sản phâm)</Accordion.Header>
                        <Accordion.Body>
                            {viewModel.dataCart.map((item, index) => (
                                <ThanhToanComponent.ItemProduct key={index} {...item} />
                            ))}
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px' }}>
                                <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tạm tính</p>
                                <p className={styles.ship_product}>{viewModel.total}₫</p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                                <p className={styles.ship_product} style={{ fontWeight: 500 }}>Phí vận chuyển</p>
                                <p className={styles.ship_product}>Miễn phí</p>
                            </div>

                            <div className={styles.line} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                                <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tổng tiền</p>
                                <p className={styles.total_product}>{viewModel.total}₫</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className={styles.container_info_user}>
                <p className={styles.title_product}>Thông tin nhận hàng</p>
                <input value={viewModel.name} type="text" placeholder="Họ và tên" className={styles.input_info} onChange={(text) => viewModel.setName(text.target.value)} /> <br />
                <p style={{ textAlign: "end", color: 'red' }}>{viewModel.errorEmail}</p>
                <input value={viewModel.email} type="email" placeholder="Email" className={styles.input_info} onChange={(text) => viewModel.setEmail(text.target.value)} /> <br />
                <p style={{ textAlign: "end", color: 'red' }}>{viewModel.errorName}</p>
                <input value={viewModel.phone} type="number" placeholder="Số điện thoại" className={styles.input_info} onChange={(text) => viewModel.setPhone(text.target.value)} /> <br />
                <p style={{ textAlign: "end", color: 'red' }}>{viewModel.errorPhone}</p>
                <input value={viewModel.address} type="text" placeholder="Địa chỉ" className={styles.input_info} onChange={(text) => viewModel.setAddress(text.target.value)} /> <br />
                <p style={{ textAlign: "end", color: 'red' }}>{viewModel.errorAddress}</p>
                <textarea value={viewModel.note} placeholder="Ghi chú" className={styles.input_info} onChange={(text) => viewModel.setNote(text.target.value)}></textarea>
                <button className={styles.btn_buy} onClick={() => viewModel.checkData()}>Đặt hàng</button>
            </div>
        </div>
    )
}
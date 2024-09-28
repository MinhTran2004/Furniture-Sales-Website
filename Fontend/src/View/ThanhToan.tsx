import { Accordion } from "react-bootstrap";
import styles from "../CSS/ThanhToan.module.css";

export default function ThanhToan() {
    const ItemProduct = () => {
        return (
            <div style={{ display: 'flex', marginBottom: 15, padding: '0 10px' }}>
                <img src="https://bizweb.dktcdn.net/thumb/thumb/100/491/756/products/trangstudio190ba67d3323d45d7b3.jpg?v=1721288332950" alt="" />
                <div className={styles.container_text}>
                    <div>
                        <p className={styles.name_product}>Đèn tường studio</p>
                        <p style={{ color: '#7a7a7a' }}>Trắng</p>
                    </div>
                    <p className={styles.color_product}>x3</p>
                    <p className={styles.price_product}>12.000.000</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container_main}>
            {/* product */}
            <div className={styles.container_product_max}>
                <div>
                    <p className={styles.title_product}>Đơn hàng (1 sản phẩm )</p>
                    <div className={styles.line} />
                    <div className={styles.list_porduct}>
                        <ItemProduct />
                        <ItemProduct />
                        <ItemProduct />
                        <ItemProduct />
                        <ItemProduct />
                        <ItemProduct />
                    </div>

                    <div className={styles.line} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                        <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tạm tính</p>
                        <p className={styles.ship_product}>12.000.000</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                        <p className={styles.ship_product} style={{ fontWeight: 500 }}>Phí vận chuyển</p>
                        <p className={styles.ship_product}>12.000.000</p>
                    </div>

                    <div className={styles.line} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                        <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tổng tiền</p>
                        <p className={styles.total_product}>12.000.000₫</p>
                    </div>
                </div>
            </div>

            <div className={styles.container_product_min}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className={styles.custom_header}>Đơn hàng (1 sản phâm)</Accordion.Header>
                        <Accordion.Body>
                            <ItemProduct />
                            <ItemProduct />
                            <ItemProduct />
                            <ItemProduct />
                            <ItemProduct />
                            <ItemProduct />
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 10px' }}>
                                <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tạm tính</p>
                                <p className={styles.ship_product}>12.000.000</p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                                <p className={styles.ship_product} style={{ fontWeight: 500 }}>Phí vận chuyển</p>
                                <p className={styles.ship_product}>12.000.000</p>
                            </div>

                            <div className={styles.line} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
                                <p className={styles.ship_product} style={{ fontWeight: 500 }}>Tổng tiền</p>
                                <p className={styles.total_product}>12.000.000₫</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>



            </div>

            <div className={styles.container_info_user}>
                <p className={styles.title_product}>Thông tin nhận hàng</p>
                <input type="email" placeholder="Email" className={styles.input_info} /> <br />
                <input type="text" placeholder="Họ và tên" className={styles.input_info} /> <br />
                <input type="number" placeholder="Số điện thoại" className={styles.input_info} /> <br />
                <input type="text" placeholder="Địa chỉ" className={styles.input_info} /> <br />
                <textarea placeholder="Ghi chú" className={styles.input_info}></textarea>
                <button className={styles.btn_buy}>Đặt hàng</button>
            </div>
        </div>
    )
}
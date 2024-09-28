import { faAngleRight, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { CartModel } from "../Model/CartModel";
import styles from "../CSS/GioHang.module.css";
import { CartController } from "../Controller/CartController";
import { GioHangComponent } from "../Component/GioHangComponent";
import { Link } from "react-router-dom";

export default function CartPage() {
    const [data, setData] = useState<CartModel[]>([])
    const [total, setTotal] = useState("");

    const getAllCart = async () => {
        try {
            const reponse = await CartController.getAllCart();
            setData(reponse);
            let sum = 0
            reponse.map((item: CartModel) => sum = sum + Number(item.sale));
            const convertSum = GioHangComponent.ConvertMoney(sum.toString());
            setTotal(convertSum);
        } catch (err) {
            console.log(err);
        }
    }

    const ItemCart = ({cart}:any ) => {
        const [quantity, setQuantity] = useState(Number(cart.quantity));
        
        const deleteCartById = async () => {
            try {
                await CartController.deleteCartById(cart._id);
                getAllCart();
            } catch (err) {
                console.log(err);
            }
        }

        const changeQuantity = async (status: Number) => {
            if (status === 0) {
                if (quantity > 1) {
                    setQuantity(quantity - 1);
                    try {
                        deleteCartById()
                    } catch (err) {
                        console.log(err);
                    }
                } else {
                    try {
                        const reponse = await CartController.deleteCartById(cart.id);
                        setData(reponse);
                    } catch (err) {
                        console.log(err);
                    }
                }
            } else {
                setQuantity(quantity + 1);
                try {
                    deleteCartById()
                } catch (err) {
                    console.log(err);
                }
            }
        }
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button style={{ border: 0, backgroundColor: 'white', fontWeight: 'bold' }} onClick={() => deleteCartById()}>X</button>
                    <img src={cart.image} alt="" className={styles.image_cart} />
                    <div>
                        <p className={styles.name_cart}>{cart.name}</p>
                        <p className={styles.name_cart} style={{ color: '#b2b2b2' }}>{cart.color}</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className={styles.sale_cart}>{GioHangComponent.ConvertMoney(cart.sale)}₫</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #d7d9e2', borderRadius: 10 }}>
                        <p className={styles.btn_change_quantity} onClick={() => changeQuantity(0)}>-</p>
                        <p className={styles.btn_change_quantity}>{quantity}</p>
                        <p className={styles.btn_change_quantity} onClick={() => changeQuantity(1)}>+</p>
                    </div>
                </div>
            </div>
        )
    }

    useEffect(() => {
        getAllCart();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className={styles.main}>
                <p style={{ fontWeight: '450', fontSize: 17 }}>Trang chủ / <span style={{ fontWeight: '500' }}>Giỏ hàng</span> </p>

                <div style={{ display: 'flex', marginTop: 15 }}>
                    <div style={{ width: '70%', padding: '10px 25px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ width: '100%', height: 8, backgroundColor: '#5bb72e', borderRadius: 20 }} />
                            <p style={{ margin: '0 8px', color: '#5bb72e', fontSize: 18, fontWeight: '500' }}>100%</p>
                        </div>

                        <div style={{ border: '1px solid #f88b38', backgroundColor: '#feeee2', padding: '8px 10px', display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/cart_upsell_coupon.png?1723020948426" alt="" style={{ height: '50%' }} />
                                <p style={{ margin: '0 10px' }}>EGAFREESHIP</p>
                            </div>
                            <button style={{ color: 'white', backgroundColor: '#f88b38', border: 0, borderRadius: 20, padding: '2px 10px' }}>Sao chép</button>
                        </div>

                        <div className={styles.container_cart}>
                            {data.map(item => (
                                <ItemCart key={item.id} cart = {item} />
                            ))}
                        </div>

                        {data.length !== 0 ?
                            (<div>
                                <p style={{ fontWeight: '500', fontSize: 16 }}>Ghi chú đơn hàng</p>
                                <textarea style={{ width: '100%'}} rows={3} />
                            </div>)
                            :
                            (<div></div>)
                        }
                    </div>

                    <div style={{ width: '30%' }}>
                        <div style={{ padding: 20, backgroundColor: '#f7f7f7' }}>
                            <p className={styles.title_sell}>HẸN GIỜ NHẬN HÀNG</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <p className={styles.title_date_sell}>Ngày nhận hàng</p>
                                    <input type="date" className={styles.date_sell} />
                                </div>
                                <div>
                                    <p className={styles.title_date_sell}>Ngày nhận hàng</p>
                                    <input type="date" className={styles.date_sell} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                                <p className={styles.total_sell}>TỔNG CỘNG</p>
                                <p className={styles.total_sell} style={{ color: 'red' }}>{total}₫</p>
                            </div>
                            <p className={styles.title_date_sell} style={{ textAlign: 'end', fontStyle: 'italic' }}>(Đã bao gồm VAT nếu có)</p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/coupon-icon.png?1723020948426" alt="" style={{ width: '20%' }} />
                                    <p className={styles.title_date_sell}>Mã giảm giá</p>
                                </div>
                                <p className={styles.title_date_sell}>Chọn mã giảm giá <FontAwesomeIcon icon={faAngleRight} /></p>
                            </div>
                            <Link to={"/ThanhToan"}> <button className={styles.btn_sell}>Thanh toán</button> </Link>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/footer_trustbadge.png?1723020948426" alt="" style={{ width: '80%' }} />
                            </div>
                        </div>
                    </div>

                </div>

                <p style={{ margin: '40px 0 0', fontWeight: 'bold', fontSize: 27 }}>Có thể bạn sẽ thích</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                    <GioHangComponent.ItemFlashSale name={'Sofa Băng Phòng Khách Truyền Thống QP115'} price={'31.200.000$'} sale={'62.400.000$'} label={50} quantity={28} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/budwingmelaniecanape3placesgir.jpg?v=1721288299183'} status={"sale"} />
                    <GioHangComponent.ItemFlashSale name={'Sofa Băng Bọc Vải Siêu Rộng Lewis Extra'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={46} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/rectangle2b82fc8df70254ff7ba5f.jpg?v=1721288309203'} status={"sale"} />
                    <GioHangComponent.ItemFlashSale name={'Sofa Băng Bọc Vải Phong Cách Scandinavian'} price={'33.750.000₫'} sale={'67.500.000₫'} label={50} quantity={96} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/951481666x12496f7cdf2128e24243.jpg?v=1721288302580'} status={"sale"} />
                    <GioHangComponent.ItemFlashSale name={'Sofa Băng Phòng Khách Truyền Thống QP113'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={87} image={'https://bizweb.dktcdn.net/100/491/756/products/ghesofatherain225noithatgiakha-699238d0-2403-4c7e-b31a-1df700837b3d.png?v=1721288295347'} status={"sale"} />
                </div>

            </div >
            {/* footer */}
            <div style={{ backgroundColor: '#292929', marginTop: 100 }}>
                <div className={styles.container_footer}>
                    <div className={styles.item_footer}>
                        <img src={require('../Image/image_logo_home_2.webp')} alt="" style={{ width: '80%', padding: '0 0 10px' }} />
                        <p className={styles.title_footer}>Siêu thị nội thất EGA</p>
                        <p className={styles.li_menu_footer}>Thương hiệu nội thất uy tín và chất lượng, cam kết mang đến những trải nghiệm mua sắm tiện lợi, hiện đại và phong phú</p>
                        <p className={styles.li_menu_footer}>Mã số thuế: 12345678999</p>
                        <p className={styles.li_menu_footer}><FontAwesomeIcon icon={faLocationDot} /> Địa chỉ: 70 Lu Gia, District 11, Ho Chi Minh City</p>
                        <p className={styles.li_menu_footer}><FontAwesomeIcon icon={faPhone} /> Số điện thoại: 19006750</p>
                        <p className={styles.li_menu_footer}><FontAwesomeIcon icon={faEnvelope} />support@sapo.vn</p>
                        <p className={styles.li_menu_footer}>© Bản quyền thuộc về EGANY| Cung cấp bởi </p>
                    </div>

                    <div className={styles.item_footer}>
                        <p className={styles.title_footer}>Hỗ trợ khách hàng</p>
                        <p className={styles.li_menu_footer}>Giới thiệu</p>
                        <p className={styles.li_menu_footer}>Thông tin liên hệ</p>
                        <p className={styles.li_menu_footer}>Tra cứu cửa hàng</p>
                        <p className={styles.li_menu_footer}>Tư vấn nội thất theo phong thủy</p>
                    </div>

                    <div className={styles.item_footer}>
                        <h5 style={{ color: 'white' }}>Chính sách</h5>
                        <p className={styles.li_menu_footer}>Điều khoản dịch vụ</p>
                        <p className={styles.li_menu_footer}>Chính sách bảo mật</p>
                        <p className={styles.li_menu_footer}>Chính sách đổi trả</p>
                        <p className={styles.li_menu_footer}>Chính sách giao hàng</p>
                        <p className={styles.li_menu_footer}>Chương trình cộng tác viên</p>

                        <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/footer_trustbadge.png?1723020948426" alt="" style={{ marginTop: 50, width: '100%' }} />
                    </div>

                    <div className={styles.item_footer}>
                        <h5 style={{ color: 'white' }}>ĐĂNG KÝ NHẬN TIN</h5>
                        <p style={{ color: 'white', fontSize: 14 }}>Bạn muốn nhận được khuyến mãi đặc biệt? Đăng kí ngay</p>

                        <div style={{ position: 'relative' }}>
                            <input placeholder="Nhập địa chỉ Email" style={{ width: '100%', padding: '8px 20px 8px 10px', borderRadius: 20, fontSize: 14 }} />
                            <button style={{ padding: '3px 10px', borderRadius: 20, backgroundColor: '#292929', color: 'white', position: 'absolute', top: '11%', right: 5, fontSize: 15 }}>Đăng kí</button>
                        </div>
                        <img src={require('../Image/footer_img.png')} alt="" style={{ marginTop: 30, width: '100%' }} />
                    </div>
                </div>
            </div>
        </div >
    )
}
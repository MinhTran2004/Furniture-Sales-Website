import { faAngleRight, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { CartSevice } from "../../Sevice/CartSevice";
import { CartModel } from "../../Model/CartModel";

export default function CartPage() {

    const [data, setData] = useState<CartModel[]>([])

    const getAllCart = async () => {
        try {
            await CartSevice.getAllCart().then((reponses) => setData(reponses?.data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllCart();
    }, [])

    const ItemCart = (cart: CartModel) => {
        const [quantity, setQuantity] = useState(Number(cart.quantity));

        const changeQuantity = async (status: Number) => {
            if (status === 0) {
                if (quantity > 1) {
                    setQuantity(quantity - 1);
                    try {
                        await CartSevice.updateCartQuantityById(cart.idProduct, (quantity - 1).toString());
                    } catch (err) {
                        console.log(err);
                    }
                }else{
                    try{
                        await CartSevice.deleteCartById(cart.idProduct); 
                    }catch(err){
                        console.log(err);
                    }
                }
            } else {
                setQuantity(quantity + 1);
                try {
                    await CartSevice.updateCartQuantityById(cart.idProduct, (quantity + 1).toString());
                } catch (err) {
                    console.log(err);
                }
            }
        }

        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaX style={{ color: '#d7d9e2' }} />
                    <img src={cart.image} alt="" style={{ width: '20%' }} />
                    <div>
                        <p style={{ margin: 0, fontWeight: '500', fontSize: 17 }}>{cart.name}</p>
                        <p style={{ margin: 0, color: '#b2b2b2' }}>{cart.color}</p>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ color: 'red', fontWeight: '500', fontSize: 18, margin: '0 20px' }}>{cart.sale}₫</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #d7d9e2', borderRadius: 10 }}>
                        <p style={{ margin: 'auto 0', padding: '5px 13px', textAlign: 'center', fontSize: 17, fontWeight: '500' }} onClick={() => changeQuantity(0)}>-</p>
                        <p style={{ margin: 'auto 0', padding: '5px 13px', textAlign: 'center', fontSize: 17, fontWeight: '500' }}>{quantity}</p>
                        <p style={{ margin: 'auto 0', padding: '5px 13px', textAlign: 'center', fontSize: 17, fontWeight: '500' }} onClick={() => changeQuantity(1)}>+</p>
                    </div>
                </div>
            </div>
        )
    }

    const ItemProduct = ({ image, name, sale, price, label }: any) => {
        return (
            <div style={{ width: '20%' }}>
                <div style={{ height: 250, padding: 10, display: 'flex', justifyContent: 'center', objectPosition: 'center' }}>
                    <img src={image} style={{ width: '100%' }} alt="" />
                </div>

                <div style={{ height: 130 }}>
                    <p style={{ margin: 0, fontWeight: '600', fontSize: 15, overflow: 'hidden' }}>{name}</p>
                    <div style={{ margin: '5px 0' }}>
                        <FaRegStar style={{ color: '#ffbe00' }} />
                        <FaRegStar style={{ color: '#ffbe00' }} />
                        <FaRegStar style={{ color: '#ffbe00' }} />
                        <FaRegStar style={{ color: '#ffbe00' }} />
                        <FaRegStar style={{ color: '#ffbe00' }} />
                    </div>
                    <p style={{ margin: 0, color: 'red', fontWeight: 'bold', fontSize: 14 }}>{sale}</p>
                    <div style={{ display: 'flex' }}>
                        <p style={{ margin: 0, textDecoration: 'line-through', fontSize: 14 }}>{price}</p>
                        <p style={{ margin: '0 10px', alignSelf: 'center', fontSize: 13, backgroundColor: '#e9330d', borderRadius: 20, color: 'white', padding: '1px 5px' }}>-{label}%</p>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div>
            <div style={{ width: '85%', margin: '0 auto', paddingTop: 70 }}>
                <p style={{ fontWeight: '450', fontSize: 17 }}>Trang chủ / <span style={{ fontWeight: '500' }}>Giỏ hàng</span> </p>
                <h2>Giỏ hàng</h2>

                <div style={{ display: 'flex' }}>
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

                        {data.map((item, index) => (
                            <ItemCart key={index} {...item} />
                        ))

                        }

                        <p style={{ fontWeight: '500', fontSize: 16 }}>Ghi chú đơn hàng</p>
                        <textarea style={{ width: '100%', border: '1px solid #d7d9e2', resize: 'none', height: 50 }} rows={8} />
                    </div>

                    <div style={{ width: '30%' }}>
                        <div style={{ padding: '20px 20px', backgroundColor: '#f7f7f7' }}>
                            <p style={{ color: '#e9330d', fontWeight: 'bold' }}>HẸN GIỜ NHẬN HÀNG</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <p>Ngày nhận hàng</p>
                                    <input type="date" style={{ padding: 3 }} />
                                </div>
                                <div>
                                    <p>Ngày nhận hàng</p>
                                    <input type="date" style={{ padding: 3 }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
                                <p style={{ fontWeight: '500', fontSize: 18 }}>TỔNG CỘNG</p>
                                <p style={{ fontWeight: '500', fontSize: 20, color: 'red' }}>31.200.000₫</p>
                            </div>
                            <p style={{ textAlign: 'end', fontStyle: 'italic' }}>(Đã bao gồm VAT nếu có)</p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/coupon-icon.png?1723020948426" alt="" />
                                    <p style={{ marginLeft: 5, fontWeight: '500' }}>Mã giảm giá</p>
                                </div>
                                <p>Chọn mã giảm giá <FontAwesomeIcon icon={faAngleRight} /></p>
                            </div>
                            <button style={{ backgroundColor: 'black', color: 'white', width: '100%', padding: '8px 0', margin: '10px 0', borderRadius: 5 }}>Thanh toán</button>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/footer_trustbadge.png?1723020948426" alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <p style={{ margin: '40px 0 0', fontWeight: 'bold', fontSize: 27 }}>Có thể bạn sẽ thích</p>

                <div style={{ display: 'flex' }}>
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP115'} price={'31.200.000$'} sale={'62.400.000$'} label={50} quantity={28} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/budwingmelaniecanape3placesgir.jpg?v=1721288299183'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Bọc Vải Siêu Rộng Lewis Extra QP243'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={46} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/rectangle2b82fc8df70254ff7ba5f.jpg?v=1721288309203'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Bọc Vải Phong Cách Scandinavian'} price={'33.750.000₫'} sale={'67.500.000₫'} label={50} quantity={96} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/951481666x12496f7cdf2128e24243.jpg?v=1721288302580'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP113'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={87} image={'https://bizweb.dktcdn.net/thumb/grande/100/491/756/products/anhsanphamd7d53ac32ef245df9fb3.jpg?v=1721288299183'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP113'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={87} image={'https://bizweb.dktcdn.net/thumb/grande/100/491/756/products/anhsanphamd7d53ac32ef245df9fb3.jpg?v=1721288299183'} status={"sale"} />
                </div>

            </div >
            {/* footer */}
            <div style={{ marginTop: 100, backgroundColor: '#292929' }}>
                <div style={{ width: '87%', margin: 'auto', padding: '80px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '25%', padding: '0 20px' }}>
                        <img src={require('../Image/image_logo_home_2.webp')} alt="" style={{ width: '50%', padding: '0 0 10px' }} />
                        <h3 style={{ color: 'white' }}>Siêu thị nội thất EGA</h3>
                        <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}>Thương hiệu nội thất uy tín và chất lượng, cam kết mang đến những trải nghiệm mua sắm tiện lợi, hiện đại và phong phú</p>
                        <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}>Mã số thuế: 12345678999</p>
                        <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}><FontAwesomeIcon icon={faLocationDot} /> Địa chỉ: 70 Lu Gia, District 11, Ho Chi Minh City</p>
                        <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}><FontAwesomeIcon icon={faPhone} /> Số điện thoại: 19006750</p>
                        <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}><FontAwesomeIcon icon={faEnvelope} />support@sapo.vn</p>
                        <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}>© Bản quyền thuộc về EGANY| Cung cấp bởi </p>
                    </div>

                    <div style={{ width: '25%' }}>
                        <h5 style={{ color: 'white', marginBottom: 20 }}>Hỗ trợ khách hàng</h5>
                        <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Giới thiệu</p>
                        <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Thông tin liên hệ</p>
                        <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Tra cứu cửa hàng</p>
                        <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Tư vấn nội thất theo phong thủy</p>
                    </div>

                    <div style={{ width: '25%' }}>
                        <h5 style={{ color: 'white' }}>Chính sách</h5>
                        <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Điều khoản dịch vụ</p>
                        <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Chính sách bảo mật</p>
                        <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Chính sách đổi trả</p>
                        <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Chính sách giao hàng</p>
                        <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Chương trình cộng tác viên</p>
                        <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/footer_trustbadge.png?1723020948426" alt="" style={{ marginTop: 50 }} />
                    </div>

                    <div style={{ width: '28%' }}>
                        <h5 style={{ color: 'white' }}>ĐĂNG KÝ NHẬN TIN</h5>
                        <p style={{ color: 'white', fontSize: 14 }}>Bạn muốn nhận được khuyến mãi đặc biệt? Đăng kí ngay</p>

                        <div style={{ position: 'relative' }}>
                            <input placeholder="Nhập địa chỉ Email" style={{ width: '100%', padding: '8px 20px 8px 10px', borderRadius: 20, fontSize: 14 }} />
                            <button style={{ padding: '3px 10px', borderRadius: 20, backgroundColor: '#292929', color: 'white', position: 'absolute', top: '11%', right: 5, fontSize: 15 }}>Đăng kí</button>
                        </div>
                        <img src={require('../Image/footer_img.png')} alt="" style={{ marginTop: 30 }} />
                    </div>
                </div>
            </div>
        </div >
    )
}
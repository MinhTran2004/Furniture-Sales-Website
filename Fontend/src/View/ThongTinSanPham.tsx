import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import styles from "../CSS/Thongtinsanpham.module.css";
import { ThongTinSanPhamComponent } from "../Component/ThongTinSanPhamComponent";
import ThongtinProduct from "../ViewModel/Cart/ThongtinProduct";

export default function InforProductPage() {
    const viewModel = ThongtinProduct();

    const [tab, setTab] = useState('TabDescribe');

    return (
        <div>
            <div className={styles.main}>
                <p style={{ fontWeight: '500', fontSize: 17 }}>Trang chủ / Sản phẩm/ <span style={{ fontWeight: '500' }}>{viewModel.location.name}</span> </p>

                <div className={styles.container_product}>
                    {/* image_product */}
                    <div className={styles.main_product}>
                        <div style={{ width: '10%'}}>
                            {viewModel.location.image.map(((item, index) => <img key={index} src={item.imageProduct} className={styles.image_item_Product} alt="" onClick={() => {viewModel.setIndexInforProduct(index)}} />))}
                        </div>
                        <div style={{ width: '90%' }}>
                            <img src={viewModel.location.image[viewModel.indexInfoProduct].imageProduct} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    </div>

                    {/* info_product */}
                    <div className={styles.main_info_product}>
                        <p className={styles.name_product}>{viewModel.location.name}</p>
                        <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        <div>
                            <p className={styles.id_product}>Thương hiệu: Đang cập nhật</p>
                            <p className={styles.id_product}>Mã sản phẩm: {viewModel.location._id}</p>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <p className={styles.sale_product}>{ThongTinSanPhamComponent.ConvertMoney(viewModel.location.sale)}</p>
                            <p className={styles.price_product}>{ThongTinSanPhamComponent.ConvertMoney(viewModel.location.price)}</p>
                            <p className={styles.label_product}>-{viewModel.location.label}%</p>
                        </div>
                        <p>(Tiết kiệm <span style={{ color: 'red' }}>{ThongTinSanPhamComponent.ConvertMoney(viewModel.location.sale)}</span>)</p>

                        <div style={{ padding: '20px 10px 5px', border: '3px dashed black', borderRadius: 10, position: 'relative', marginTop: 15 }}>
                            <div style={{ display: 'flex', padding: '0 5px', position: 'absolute', top: '-10%', left: '3%', backgroundColor: 'white' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/icon-product-promotion.png?1723020948426" alt="" style={{ height: 'auto', width: '10%' }} />
                                <p className={styles.gift_product}>KHUYẾN MẠI - ƯU ĐÃI</p>
                            </div>
                            <ul className={styles.text_gift_product}>
                                <li>Nhập mã <span>EGANY</span> thêm 5% đơn hàng</li>
                                <li>Miễn phí Ship cho đơn hàng từ 300.000₫</li>
                                <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                            </ul>
                        </div>

                        <p style={{ width: '100%', margin: '20px 5px 5px 0', fontSize: 16, fontWeight: '500' }}>MÃ GIẢM GIÁ</p>
                        <div style={{ display: 'flex' }}>
                            <div className={styles.coupon}>EGAFREESHIP</div>
                            <div className={styles.coupon}>GIAM50K</div>
                            <div className={styles.coupon}>GIAM30</div>
                            <div className={styles.coupon}>GIAM40</div>
                        </div>

                        {viewModel.location.image[viewModel.indexInfoProduct].color !== "" ?
                            <div>
                                <p style={{ width: '100%', margin: '20px 5px 5px 0', fontSize: 16, fontWeight: '500' }}>Màu sắc: {viewModel.location.image[viewModel.indexInfoProduct].color} </p>
                                <div style={{ display: 'flex' }}>
                                    {viewModel.location.image.map((item, index) => (
                                        <div key={index} style={{ width: 35, height: 35, display: 'flex', border: '1px solid #bdbdbd', borderRadius: 50, margin: '0 5px', padding: 2 }}>
                                            <img src={item.imageProduct} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 50 }} alt="" onClick={() => { viewModel.setIndexInforProduct(index) }} />
                                        </div>))
                                    }
                                </div>
                            </div>
                            :
                            <div></div>
                        }

                        <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'space-between' }}>
                            <div className={styles.container_quantity}>
                                <p className={styles.quantity} onClick={() => viewModel.changeQuantity(0)}>-</p>
                                <p className={styles.quantity}>{viewModel.quantity}</p>
                                <p className={styles.quantity} onClick={() => viewModel.changeQuantity(1)}>+</p>
                            </div>
                            <button className={styles.btn_cart} onClick={viewModel.addCart}>Thêm vào giỏ hàng</button>
                        </div>
                        <button style={{ width: '100%', backgroundColor: 'black', padding: '7px 0', borderRadius: 5, color: 'white', fontSize: 18, fontWeight: '500' }}>Mua ngay</button>

                        <p className={styles.phone_product}>Gọi đặt mua <span style={{ color: '#ec720e', fontWeight: '500' }}>1800.0000</span> (7:30 - 22:00)</p>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', width: '33%', alignItems: 'center' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policy_product_image_1.png?1723020948426" alt="" className={styles.media_icon} />
                                <p className={styles.media_text}>Giao hàng toàn quốc</p>
                            </div>
                            <div style={{ display: 'flex', width: '33%', alignItems: 'center' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policy_product_image_2.png?1723020948426" alt="" className={styles.media_icon} />
                                <p className={styles.media_text}>Tích điểm tất cả sản phẩm</p>
                            </div>
                            <div style={{ display: 'flex', width: '33%', alignItems: 'center' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policy_product_image_3.png?1723020948426" alt="" className={styles.media_icon} />
                                <p className={styles.media_text}>Giảm 5% khi thanh toán online</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ margin: '70px auto 0' }}>
                    <div className={styles.container_tabs}>
                        <button className={styles.tab_content} onClick={() => setTab('TabDescribe')}>Mô tả sản phẩm</button>
                        <button className={styles.tab_content} onClick={() => setTab('TabDeliveryPolicy')}>Chính sách giao hàng</button>
                        <button className={styles.tab_content} onClick={() => setTab('TabReturnPolicy')}>Chính sách đổi trả</button>
                    </div>

                    <div style={{ borderTop: '1px solid #d7d9e2', paddingTop: 10 }}>
                        {tab === "TabDescribe" && <ThongTinSanPhamComponent.TabDescribe />}
                        {tab === "TabDeliveryPolicy" && <ThongTinSanPhamComponent.TabDeliveryPolicy />}
                        {tab === "TabReturnPolicy" && <ThongTinSanPhamComponent.TabReturnPolicy />}
                    </div>
                </div>

                <div style={{ width: '100%', border: '1px solid #d7d9e2', padding: 20 }}>
                    <p style={{fontWeight: '500'}}>Nhận xét</p>
                    <div style={{ margin: '0 auto', border: '1px solid #d7d9e2', backgroundColor: '#f2f8ea', textAlign: 'center', padding: 30 }}>
                        <p>Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho sản phẩm này</p>
                        <button style={{ backgroundColor: '#80bb35', padding: '5px 10px', border: 0, color: 'white' }}>Gửi đánh giá của bạn</button>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className={styles.container_Policies}>
                <div style={{ display: 'flex' }}>
                    <ThongTinSanPhamComponent.ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_1.png?1723020948426'} title={'Hotline: 19001993'} desc={'Dịch vụ hỗ trợ bạn 24/7'} />
                    <ThongTinSanPhamComponent.ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_2.png?1723020948426'} title={'Quà tặng hấp dẫn'} desc={'Nhiều ưu đãi khuyến mãi hot'} />
                    <ThongTinSanPhamComponent.ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_3.png?1723020948426'} title={'Đổi trả miễn phí'} desc={'Trong vòng 7 ngày'} />
                    <ThongTinSanPhamComponent.ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_4.png?1723020948426'} title={'Giá luôn tốt nhất'} desc={'Hoàn tiền nếu nơi khác rẻ hơn'} />
                </div>
            </div>

            <div style={{ backgroundColor: '#292929' }}>
                <div className={styles.container_footer}>
                    <div className={styles.item_footer}>
                        <img src={require('../Image/image_logo_home_2.webp')} alt="" style={{ width: '80%', padding: '0 0 10px' }} />
                        <p className={styles.title_footer}>iêu thị nội thất EGA</p>
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
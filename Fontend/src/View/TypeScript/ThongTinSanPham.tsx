import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useLocation } from "react-router-dom"
import { ProductModel } from "../../Model/ProductModel";
import { CartModel } from "../../Model/CartModel";
import styles from "../CSS/Thongtinsanpham.module.css";
import { CartController } from "../../Controller/CartController";

export default function InforProductPage() {
    const location: ProductModel = useLocation().state;

    const [imageProduct, setImageProduct] = useState(location.image[0].imageProduct);
    const [colorProduct, setColorProduct] = useState(location.image[0].color);
    const [quantity, setQuantity] = useState(1);
    const [tab, setTab] = useState('TabDescribe');

    const ConvertMoney = (price: String) => {
        const convertMoney = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return convertMoney;
    }
    const addCart = async () => {
        try {
            const product = new CartModel(undefined, location._id, imageProduct, location.name, colorProduct, location.sale, "1", "true");
            await CartController.addCart(product);
        } catch (err) {
            console.log(err);
        }
    }
    const changeQuantity = (status: Number) => {
        if (status === 0) {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        } else {
            setQuantity(quantity + 1);
        }
    }
    const TabDescribe = () => {
        return (
            <div style={{ width: '75%', margin: '0 auto', textAlign: 'justify' }}>
                <p style={{ fontWeight: '500', fontSize: 17 }}>Bữa cơm gia đình là khoảnh khắc sum vầy, gắn kết yêu thương. Hãy biến những khoảnh khắc ấy thêm ấm áp và trọn vẹn. Bộ bàn ăn được thiết kế hiện đại, sang trọng, sử dụng chất liệu cao cấp cùng quy trình sản xuất tiên tiến, mang đến cho gia đình bạn không gian đẳng cấp.</p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>Đặc điểm nổi bật</p>
                <ul>
                    <li style={{ fontWeight: 'bold' }}>Thiết kế hiện đại: <span style={{ fontWeight: 'normal' }}>Sở hữu kiểu dáng hiện đại, thanh lịch phù hợp với mọi không gian nội thất. Các đường nét thiết kế tinh tế, gọn gàng tạo nên vẻ đẹp sang trọng và đẳng cấp cho phòng bếp của bạn</span></li>
                    <li style={{ fontWeight: 'bold' }}>Chất liệu cao cấp:</li>
                    <ul>
                        <li style={{ fontWeight: 'bold' }}>Mặt bàn: <span style={{ fontWeight: 'normal' }}> Mặt bàn được làm từ cao cấp, có khả năng chống xước, chống thấm nước, chịu nhiệt tốt và dễ dàng vệ sinh.</span></li>
                        <li style={{ fontWeight: 'bold' }}>Khung bàn: <span style={{ fontWeight: 'normal' }}>Khung bàn được làm chắc chắn, đảm bảo độ bền bỉ theo thời gian.</span></li>
                        <li style={{ fontWeight: 'bold' }}>Ghế: <span style={{ fontWeight: 'normal' }}>Ghế được bọc da cao cấp, mềm mại và êm ái, mang lại cảm giác thoải mái khi ngồi.</span></li>
                    </ul>
                    <li style={{ fontWeight: 'bold' }}>Chế tác tinh xảo: <span style={{ fontWeight: 'normal' }}>Từng chi tiết đều được chế tác một cách tỉ mỉ và tinh xảo, thể hiện sự sang trọng và đẳng cấp của sản phẩm. Các đường may chắc chắn, đều đặn cùng lớp sơn bóng mịn tạo nên vẻ đẹp hoàn hảo cho bộ bàn ăn.</span></li>
                    <li style={{ fontWeight: 'bold' }}>Kích thước đa dạng: <span style={{ fontWeight: 'normal' }}>Có nhiều kích thước khác nhau để bạn lựa chọn, phù hợp với diện tích phòng bếp của bạn.</span></li>
                </ul>
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>Lợi ích: </p>
                <ul>
                    <li>Mang đến sự tiện nghi và thoải mái cho bữa cơm gia đình bạn.</li>
                    <li>Thiết kế hiện đại, sang trọng góp phần tô điểm cho không gian bếp của bạn thêm đẹp mắt và đẳng cấp.</li>
                    <li>Chất liệu cao cấp đảm bảo độ bền đẹp cho sản phẩm theo thời gian.</li>
                    <li>Dễ dàng vệ sinh và bảo quản.</li>
                </ul>
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>Phù hợp cho: </p>
                <ul>
                    <li>Phòng bếp gia đình</li>
                    <li>Căn hộ chung cư</li>
                    <li>Nhà hàng</li>
                    <li>Khách sạn</li>
                    <li>Resort</li>
                </ul>

            </div>
        )
    }
    const TabDeliveryPolicy = () => {
        return (
            <div style={{ width: '75%', margin: '0 auto', textAlign: 'justify' }}>
                <p>Dịch vụ giao hàng tận nơi trên toàn quốc, áp dụng cho khách mua hàng trên website, fanpage và gọi điện thoại, không áp dụng cho khách mua trực tiếp tại cửa hàng.</p>
                <p>Đơn hàng sẽ được chuyển phát đến tận địa chỉ khách hàng cung cấp thông qua công ty vận chuyển trung gian.</p>
                <p style={{ fontWeight: 'bold' }}>Thời gian giao hàng: </p>
                <li>1.Đơn hàng nội và ngoại thành TP.HCM:</li>
                <p>Thời gian giao hàng là 1-2 ngày sau khi đặt hàng. </p>
                <p>Đơn hang trước 11h30 trưa thì sẽ giao trong buổi chiều cùng ngày </p>
                <p>Đơn hàng sau 11h30 sẽ giao trong buổi tối và sáng hôm sau. </p>
                <li>Đơn hàng ở các tỉnh thành khác:</li>
                <p>Thời gian là 2-3 ngày đối với khu vực trung tâm tỉnh thành phố, 3-7 ngày đối với khu vực ngoại thành, huyện, xã, thị trấn… </p>
                <p>(Không tính thứ bảy, chủ nhật hay các ngày lễ tết) </p>
                <p>Thời gian xử lý đơn hàng sẽ được tính từ khi nhận được thanh toán hoàn tất của quý khách. </p>
                <p>Có thể thay đổi thời gian giao hàng nếu khách hàng yêu cầu và EGA Furniture chủ động đổi trong trường hợp chịu ảnh hưởng của thiên tai hoặc các sự kiện đặc biệt khác. </p>
                <p>Đơn hàng của quý khách sẽ được giao tối đa trong 2 lần. Trường hợp lần đầu giao hàng không thành công, sẽ có nhân viên liên hệ để sắp xếp lịch giao hàng lần 2 với quý khách, trong trường hợp vẫn không thể liên lạc lại được hoặc không nhận được bất kì phản hồi nào từ phía quý khách, đơn hàng sẽ không còn hiệu lực. </p>
                <p>Để kiểm tra thông tin hoặc tình trạng đơn hàng của quý khách, xin vui lòng inbox fanpage hoặc gọi số hotline, cung cấp tên, số điện thoại để được kiểm tra. </p>
                <p>Khi hàng được giao đến quý khách, vui lòng ký xác nhận với nhân viên giao hàng và kiểm tra lại số lượng cũng như loại hàng hóa được giao có chính xác không. Xin quý khách vui lòng giữ lại biên lại vận chuyển và hóa đơn mua hàng để đối chiếu kiểm tra. </p>
                <p style={{ fontWeight: 'bold' }}>2.Phí giao hàng</p>
                <li>Phí ship cố định là 30,000đ áp dụng cho mọi khu vực </li>
            </div>
        )
    }
    const TabReturnPolicy = () => {
        return (
            <div style={{ width: '75%', margin: '0 auto' }}>
                <p>EGA - Chính Sách Đổi Trả Tốt Nhất Cho Nội Thất Chất Lượng</p>
                <p>Tại EGA, chúng tôi cam kết đem đến cho khách hàng sự hài lòng tối đa và trải nghiệm mua sắm dễ dàng, đáng tin cậy. Chính vì vậy, chúng tôi tự hào giới thiệu Chính Sách Đổi Trả Tốt Nhất cho các sản phẩm nội thất, bao gồm giường, ghế, bộ phòng ngủ, nội thất phòng khách và nhiều hơn nữa.</p>
                <p>Chúng tôi hiểu rằng việc lựa chọn nội thất phù hợp với không gian sống là một quyết định quan trọng, và có thể đòi hỏi sự cân nhắc kỹ lưỡng. Do đó, chúng tôi mang đến Chính Sách Đổi Trả linh hoạt và tiện lợi, nhằm giúp bạn hoàn toàn yên tâm trong quá trình mua sắm.</p>
                <p>Theo chính sách của chúng tôi, nếu bạn không hoàn toàn hài lòng với sản phẩm đã mua, bạn có thể đổi trả trong vòng 30 ngày kể từ ngày mua hàng. Điều quan trọng là sản phẩm phải còn nguyên vẹn, không bị hỏng hóc và chưa sử dụng. Chúng tôi luôn coi trọng sự đáng tin cậy và uy tín, và cam kết xử lý các yêu cầu đổi trả một cách nhanh chóng và hiệu quả.</p>
                <p>Để thực hiện quyền đổi trả, bạn chỉ cần liên hệ với đội ngũ hỗ trợ khách hàng của chúng tôi thông qua điện thoại hoặc email. Chúng tôi sẽ hỗ trợ bạn trong việc đăng ký yêu cầu đổi trả và cung cấp hướng dẫn chi tiết về quy trình.</p>
                <p>Không chỉ giới hạn đối với việc đổi trả, chúng tôi cũng cam kết hỗ trợ sửa chữa và bảo hành cho các sản phẩm nội thất của chúng tôi. Nếu có bất kỳ vấn đề gì liên quan đến chất lượng hoặc hư hỏng của sản phẩm, xin vui lòng liên hệ với chúng tôi. Đội ngũ kỹ thuật viên giàu kinh nghiệm sẽ nhanh chóng tới để kiểm tra và sửa chữa sản phẩm của bạn.</p>
                <p>EGA luôn hướng tới sự hài lòng và niềm tin tuyệt đối của khách hàng. Chúng tôi xây dựng Chính Sách Đổi Trả Tốt Nhất không chỉ để tạo điều kiện thuận lợi cho bạn mua sắm, mà còn là cách thể hiện lòng tri ân đối với sự tin tưởng mà bạn đã dành cho chúng tôi.</p>
                <p>Hãy để EGA đồng hành cùng bạn trong việc trang trí không gian sống và mang đến cho bạn những trải nghiệm thú vị cùng với những sản phẩm nội thất tinh tế và chất lượng.</p>
            </div>
        )
    }
    const ItemPolicies = ({ image, title, desc }: any) => {
        return (
            <div className={styles.item_Policies}>
                <img src={image} alt="" className={styles.img_Policies} />
                <div>
                    <p className={styles.title_Policies}>{title}</p>
                    <p className={styles.desc_Policies}>{desc}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className={styles.main}>
                <p style={{ fontWeight: '500', fontSize: 17 }}>Trang chủ / Sản phẩm/ <span style={{ fontWeight: '500' }}>{location.name}</span> </p>

                <div className={styles.container_product}>
                    {/* image_product */}
                    <div className={styles.main_product}>
                        <div style={{ width: '10%'}}>
                            {location.image.map(((item, index) => <img key={index} src={item.imageProduct} className={styles.image_item_Product} alt="" onClick={() => { setImageProduct(item.imageProduct); setColorProduct(item.color) }} />))}
                        </div>
                        <div style={{ width: '90%' }}>
                            <img src={imageProduct} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    </div>

                    {/* info_product */}
                    <div className={styles.main_info_product}>
                        <p className={styles.name_product}>{location.name}</p>
                        <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        <div>
                            <p className={styles.id_product}>Thương hiệu: Đang cập nhật</p>
                            <p className={styles.id_product}>Mã sản phẩm: {location._id}</p>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <p className={styles.sale_product}>{ConvertMoney(location.sale)}</p>
                            <p className={styles.price_product}>{ConvertMoney(location.price)}</p>
                            <p className={styles.label_product}>-{location.label}%</p>
                        </div>
                        <p>(Tiết kiệm <span style={{ color: 'red' }}>{ConvertMoney(location.sale)}</span>)</p>

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

                        {location.image[0].color !== "" ?
                            <div>
                                <p style={{ width: '100%', margin: '20px 5px 5px 0', fontSize: 16, fontWeight: '500' }}>Màu sắc: {colorProduct} </p>
                                <div style={{ display: 'flex' }}>
                                    {location.image.map((item, index) => (
                                        <div key={index} style={{ width: 35, height: 35, display: 'flex', border: '1px solid #bdbdbd', borderRadius: 50, margin: '0 5px', padding: 2 }}>
                                            <img src={item.imageProduct} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 50 }} alt="" onClick={() => { setImageProduct(item.imageProduct); setColorProduct(item.color) }} />
                                        </div>))
                                    }
                                </div>
                            </div>
                            :
                            <div></div>
                        }

                        <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'space-between' }}>
                            <div className={styles.container_quantity}>
                                <p className={styles.quantity} onClick={() => changeQuantity(0)}>-</p>
                                <p className={styles.quantity}>{quantity}</p>
                                <p className={styles.quantity} onClick={() => changeQuantity(1)}>+</p>
                            </div>
                            <button className={styles.btn_cart} onClick={addCart}>Thêm vào giỏ hàng</button>
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
                        {tab === "TabDescribe" && <TabDescribe />}
                        {tab === "TabDeliveryPolicy" && <TabDeliveryPolicy />}
                        {tab === "TabReturnPolicy" && <TabReturnPolicy />}
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
                    <ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_1.png?1723020948426'} title={'Hotline: 19001993'} desc={'Dịch vụ hỗ trợ bạn 24/7'} />
                    <ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_2.png?1723020948426'} title={'Quà tặng hấp dẫn'} desc={'Nhiều ưu đãi khuyến mãi hot'} />
                    <ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_3.png?1723020948426'} title={'Đổi trả miễn phí'} desc={'Trong vòng 7 ngày'} />
                    <ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_4.png?1723020948426'} title={'Giá luôn tốt nhất'} desc={'Hoàn tiền nếu nơi khác rẻ hơn'} />
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
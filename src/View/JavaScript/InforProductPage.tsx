import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useLocation } from "react-router-dom"

export default function InforProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [tab, setTab] = useState('TabDescribe');

    const location = useLocation().state;

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
            <div style={{width: '75%', margin: '0 auto', textAlign: 'justify'}}>
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
        return(
            <div style={{width: '75%', margin: '0 auto'}}>
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
            <div style={{ width: '25%', display: 'flex', alignItems: 'center', padding: '20px 0' }}>
                <img src={image} alt="" />
                <div>
                    <p style={{ margin: '0px 10px', fontSize: 15, color: 'white', fontWeight: '500' }}>{title}</p>
                    <p style={{ margin: '0px 10px', fontSize: 15, color: 'white' }}>{desc}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div style={{ paddingTop: 100, width: '85%', margin: '0 auto' }}>
                <p style={{ fontWeight: '450', fontSize: 17 }}>Trang chủ / Sản phẩm/ <span style={{ fontWeight: '500' }}>{location.name}</span> </p>

                <div style={{ display: 'flex' }}>

                    <div style={{ width: '50%', height: '40%' }}>
                        <img src={location.image} alt="" style={{ width: '100%', height: '100%' }} />
                    </div>

                    <div style={{ width: '50%' }}>
                        <p style={{ margin: 0, fontSize: 25, fontWeight: '500' }}>{location.name}</p>
                        <div>
                            <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                            <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                            <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                            <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                            <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                        </div>
                        <p>Thương hiệu: Đang cập nhật <span style={{ marginLeft: 30 }}>Mã sản phẩm: 123</span></p>
                        <div style={{ display: 'flex' }}>
                            <p style={{ margin: 0, color: 'red', fontWeight: '500', fontSize: 22 }}>{location.sale}</p>
                            <p style={{ margin: 'auto 10px', textDecoration: 'line-through', fontSize: 18, color: '#979797', textAlign: 'center' }}>{location.price}</p>
                            <p style={{ margin: 'auto 0', alignSelf: 'center', fontSize: 16, fontWeight: '500', backgroundColor: '#e9330d', borderRadius: 20, color: 'white', padding: '2px 10px' }}>-{location.label}%</p>
                        </div>
                        <p>(Tiết kiệm <span style={{ color: 'red' }}>31.200.000₫</span>)</p>

                        <div style={{ padding: '20px 10px 5px', border: '3px dashed black', borderRadius: 10, position: 'relative' }}>
                            <div style={{ display: 'flex', padding: '0 5px', position: 'absolute', top: '-10%', left: '3%', backgroundColor: 'white' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/icon-product-promotion.png?1723020948426" alt="" style={{ height: 'auto', width: '12%' }} />
                                <p style={{ width: '100%', margin: '0 5px', fontSize: 15, fontWeight: '500' }}>KHUYẾN MẠI - ƯU ĐÃI</p>
                            </div>
                            <ul>
                                <li>Nhập mã <span>EGANY</span> thêm 5% đơn hàng</li>
                                <li>Miễn phí Ship cho đơn hàng từ 300.000₫</li>
                                <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                            </ul>
                        </div>

                        <div>
                            <p style={{ width: '100%', margin: '20px 5px 5px 0', fontSize: 18, fontWeight: 'bold' }}>MÃ GIẢM GIÁ</p>
                            <div style={{ display: 'flex' }}>
                                <div style={{ border: '1px solid #ec720e', color: '#ec720e', marginRight: 10, padding: 5, borderRadius: 10 }}>EGAFREESHIP</div>
                                <div style={{ border: '1px solid #ec720e', color: '#ec720e', marginRight: 10, padding: 5, borderRadius: 10 }}>GIAM50K</div>
                                <div style={{ border: '1px solid #ec720e', color: '#ec720e', marginRight: 10, padding: 5, borderRadius: 10 }}>GIAM30</div>
                                <div style={{ border: '1px solid #ec720e', color: '#ec720e', marginRight: 10, padding: 5, borderRadius: 10 }}>GIAM40</div>
                            </div>
                        </div>

                        <div>
                            <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'space-between' }}>

                                <div style={{ width: '20%', display: 'flex', justifyContent: 'space-between', border: '1px solid black', borderRadius: 10, alignItems: 'center' }}>
                                    <p style={{ width: '33%', margin: 'auto 0', textAlign: 'center', fontSize: 25 }} onClick={() => changeQuantity(0)}>-</p>
                                    <p style={{ width: '33%', margin: 'auto 0', textAlign: 'center', fontSize: 22 }}>{quantity}</p>
                                    <p style={{ width: '33%', margin: 'auto 0', textAlign: 'center', fontSize: 25 }} onClick={() => changeQuantity(1)}>+</p>
                                </div>
                                <button style={{ width: '78%', padding: '7px 0', borderRadius: 10, fontSize: 18, fontWeight: '500' }}>Thêm vào giỏ hàng</button>
                            </div>

                            <button style={{ width: '100%', backgroundColor: 'black', padding: '7px 0', borderRadius: 5, color: 'white', fontSize: 18, fontWeight: '500' }}>Mua ngay</button>
                        </div>

                        <p style={{ margin: '20px auto', textAlign: 'center', fontSize: 18 }}>Gọi đặt mua <span style={{ fontSize: 18, color: '#ec720e', fontWeight: '500' }}>1800.0000</span> (7:30 - 22:00)</p>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', width: '33%', height: 'auto' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policy_product_image_1.png?1723020948426" alt="" style={{ width: '12%', height: '50%' }} />
                                <p style={{ margin: '0 5px' }}>Giao hàng toàn quốc</p>
                            </div>
                            <div style={{ display: 'flex', width: '33%', height: 'auto' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policy_product_image_2.png?1723020948426" alt="" style={{ width: '12%', height: '50%' }} />
                                <p style={{ margin: '0 5px' }}>Tích điểm tất cả sản phẩm</p>
                            </div>
                            <div style={{ display: 'flex', width: '33%', height: 'auto' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policy_product_image_3.png?1723020948426" alt="" style={{ width: '12%', height: '50%' }} />
                                <p style={{ margin: '0 5px' }}>Giảm 5% khi thanh toán online</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ margin: '70px auto 0' }}>
                    <div style={{ width: '40%', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
                        <button style={{ color: '#9c9c9c', fontSize: 18, fontWeight: 600, marginBottom: 10, border: 0, backgroundColor: 'white' }} onClick={() => setTab('TabDescribe')}>Mô tả sản phẩm</button>
                        <button style={{ color: '#9c9c9c', fontSize: 18, fontWeight: 600, marginBottom: 10, border: 0, backgroundColor: 'white' }} onClick={() => setTab('TabDeliveryPolicy')}>Chính sách giao hàng</button>
                        <button style={{ color: '#9c9c9c', fontSize: 18, fontWeight: 600, marginBottom: 10, border: 0, backgroundColor: 'white' }} onClick={() => setTab('TabReturnPolicy')}>Chính sách đổi trả</button>
                    </div>

                    <div style={{ borderTop: '1px solid #d7d9e2', paddingTop: 10 }}>
                        {tab === "TabDescribe" && <TabDescribe />}
                        {tab === "TabDeliveryPolicy" && <TabDeliveryPolicy />}
                        {tab === "TabReturnPolicy" && <TabReturnPolicy />}
                    </div>
                </div>

                <div style={{width: '100%', border: '1px solid #d7d9e2', padding: 20 }}>
                    <h2>Nhận xét</h2>
                    <div style={{ margin: '0 auto', border: '1px solid #d7d9e2', backgroundColor: '#f2f8ea', textAlign: 'center', padding: 30}}>
                        <p>Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho sản phẩm này</p>
                        <button style={{backgroundColor: '#80bb35', padding: '5px 10px', border: 0, color: 'white'}}>Gửi đánh giá của bạn</button>
                    </div>
                </div>




            </div>

            {/* footer */}
            <div>
                <div style={{ padding: '0 7.3%', backgroundColor: '#ec720e', marginTop: 100 }}>
                    <div style={{ display: 'flex' }}>
                        <ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_1.png?1723020948426'} title={'Hotline: 19001993'} desc={'Dịch vụ hỗ trợ bạn 24/7'} />
                        <ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_2.png?1723020948426'} title={'Quà tặng hấp dẫn'} desc={'Nhiều ưu đãi khuyến mãi hot'} />
                        <ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_3.png?1723020948426'} title={'Đổi trả miễn phí'} desc={'Trong vòng 7 ngày'} />
                        <ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_4.png?1723020948426'} title={'Giá luôn tốt nhất'} desc={'Hoàn tiền nếu nơi khác rẻ hơn'} />
                    </div>
                </div>

                <div style={{ backgroundColor: '#292929' }}>

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

                        <div style={{ width: '25%' }}>
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
            </div>

        </div>
    )
}
import { faCalendarDays, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function InspirationalPage() {


    const ItemInspiration = ({ image, title, date, contents }: any) => {
        return (
            <div style={{ display: 'flex', padding: 10 }}>
                <img src={image} style={{ width: '38%' }} alt="" />
                <div style={{ marginLeft: 20 }}>
                    <p style={{ fontSize: 22, fontWeight: '400', margin: '5px 0' }}>{title}</p>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: 18 }} />
                        <p style={{ fontSize: 16, color: '#889096', margin: 0, marginLeft: 5 }}>{date}</p>
                    </div>

                    <p style={{ fontSize: 17, color: '#889096', fontWeight: '400', margin: '9px 0' }}>{contents}</p>

                    <a href="#doc" style={{ color: 'black', fontSize: 14 }}>Đọc tiếp</a>
                </div>
            </div>
        )
    }

    const ItemNews = ({ image, title }: any) => {
        return (
            <div style={{ display: 'flex', marginBottom: 15 }}>
                <img src={image} style={{ width: 90, height: 70, objectFit: 'cover' }} alt=""/>
                <p style={{ fontSize: 15, marginLeft: 10, fontWeight: '500' }}>{title}</p>
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
        <div style={{ margin: '0 auto', paddingTop: 70 }}>

            <div style={{ width: '85%', margin: '0 auto' }}>

                <p style={{ fontWeight: '450', fontSize: 16 }}>Trang chủ / <span style={{ fontWeight: '500' }}>Tất cả sản phẩm</span> </p>
                <h4 style={{ textAlign: 'center', margin: '50px auto', borderBottom: '1px solid #d7d9e2', paddingBottom: 20 }}>Tin tức</h4>

                <div style={{ display: 'flex', width: '100%' }}>
                    <div style={{ width: '78%' }}>
                        <ItemInspiration image={require('../Image/inspiration_1.webp')} title={'Cách trang trí cầu thang gỗ'} date={'Thứ Năm, 27/07/2023'} contents={'Trang trí cầu thang là một phần quan trọng trong nội thất của một ngôi nhà của bạn. Xu hướng sử dụng gỗ trang trí cầu thang là...'} />
                        <ItemInspiration image={require('../Image/inspiration_2.webp')} title={'Vợ chồng và cách chọn giường ngủ'} date={'Thứ Năm, 27/07/2023'} contents={'Cuộc sống vợ chồng rất quan trọng về vấn đề hòa hợp, bởi vậy trước khi cưới thường có tục lệ là đi xem ngày và...'} />
                        <ItemInspiration image={require('../Image/inspiration_3.webp')} title={'Sofa gia đình - bài trí sao cho hợp phong thủy?'} date={'Thứ Năm, 27/07/2023'} contents={'Việc bố trí sofa đúng cách không chỉ mang lại vẻ đẹp cho căn phòng mà còn mang lại may mắn, bình an cho chủ nhà....'} />
                        <ItemInspiration image={require('../Image/inspiration_4.webp')} title={'Sofa góc và bí quyết tăng tài lộc cho ngôi nhà của bạn'} date={'Thứ Năm, 27/07/2023'} contents={'Bí quyết nào tăng tài lộc cho ngôi nhà với Sofa góc cổ điển? Việc tìm được một vị trí để đặt Sofa góc cổ điển đã...'} />
                        <ItemInspiration image={require('../Image/inspiration_5.webp')} title={'Vì sao kệ bếp gỗ xoan đào được nhiều người ưa chuộng'} date={'Thứ Năm, 27/07/2023'} contents={'Kệ bếp là sản phẩm không thể thiếu được trong mỗi gia đình và có độ tùy biến cao nhất vì mỗi gia đình có một...'} />
                    </div>

                    <div style={{ width: '22%' }}>
                        <div>
                            <p style={{ margin: 0, fontWeight: 'bold' }}>DANH MỤC TIN TỨC</p>
                            <Link to="/" style={{ textDecoration: 'none', fontSize: 17, color: '#889096', fontWeight: '400' }}>Trang chủ</Link> <br />
                            <Link to="/Product" style={{ textDecoration: 'none', fontSize: 17, color: '#889096', fontWeight: '400' }}>Sản phẩm</Link><br />
                            <Link to="/Promotion" style={{ textDecoration: 'none', fontSize: 17, color: '#889096', fontWeight: '400' }}>Khuyến mãi</Link><br />
                            <Link to="/Inspirational" style={{ textDecoration: 'none', fontSize: 17, color: '#889096', fontWeight: '400' }}>Góc cảm hứng</Link><br />
                            <Link to="/e" style={{ textDecoration: 'none', fontSize: 17, color: '#889096', fontWeight: '400' }}>Hướng dẫn thiết lập</Link><br />
                        </div>

                        <div>
                            <p style={{ margin: '30px 0 10px', fontWeight: 'bold' }}>TIN NỔI BẬT</p>
                            <ItemNews title={'Phòng ngủ phong cách Wabi Sabi'} image={'https://bizweb.dktcdn.net/thumb/medium/100/491/756/articles/phong-cach-wabi-sabi-hap-dan-tu.jpg?v=1691427092207'} />
                            <ItemNews title={'Phòng ngủ phong cách Loft'} image={'https://bizweb.dktcdn.net/thumb/medium/100/491/756/articles/thiet-ke-bep-phong-cach-loft-102.jpg?v=1691427581617'} />
                            <ItemNews title={'Phòng ngủ phong cách Japandi'} image={'https://bizweb.dktcdn.net/thumb/medium/100/491/756/articles/phong-ngu-phong-cach-japandi-dep.jpg?v=1691426187210'} />
                            <ItemNews title={'Phòng ngủ phong cách indochine'} image={'https://bizweb.dktcdn.net/thumb/medium/100/491/756/articles/noi-that-biet-thu-phong-cach-ind.jpg?v=1691425189267'} />
                        </div>

                        <div>
                            <p style={{ margin: '30px 0 10px', fontWeight: 'bold' }}>TAG</p>
                            <p>bếp   bí quyết   cầu thang   gia đình   giường gỗ   màu sắc   phòng ngủ   phong thủy   sofa   thiết kế</p>
                        </div>
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
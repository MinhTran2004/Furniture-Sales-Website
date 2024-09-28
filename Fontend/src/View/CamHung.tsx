import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import styles from "../CSS/CamHung.module.css"
import { CamHungComponent } from "../Component/CamHungComponent"

export default function InspirationalPage() {
    return (
        <div style={{ paddingTop: 70 }}>

            <div className={styles.main}>
                <p style={{ fontWeight: '450', fontSize: 19 }}>Trang chủ / <span style={{ fontWeight: '500' }}>Góc cảm hứng</span> </p>
                <p className={styles.title}>Tin tức</p>

                <div className={styles.container}>
                    <div className={styles.banner1}>
                        <CamHungComponent.ItemInspiration image={require('../Image/inspiration_1.webp')} title={'Cách trang trí cầu thang gỗ'} date={'Thứ Năm, 27/07/2023'} contents={'Trang trí cầu thang là một phần quan trọng trong nội thất của một ngôi nhà của bạn. Xu hướng sử dụng gỗ trang trí cầu thang là...'} />
                        <CamHungComponent.ItemInspiration image={require('../Image/inspiration_2.webp')} title={'Vợ chồng và cách chọn giường ngủ'} date={'Thứ Năm, 27/07/2023'} contents={'Cuộc sống vợ chồng rất quan trọng về vấn đề hòa hợp, bởi vậy trước khi cưới thường có tục lệ là đi xem ngày và...'} />
                        <CamHungComponent.ItemInspiration image={require('../Image/inspiration_3.webp')} title={'Sofa gia đình - bài trí sao cho hợp phong thủy?'} date={'Thứ Năm, 27/07/2023'} contents={'Việc bố trí sofa đúng cách không chỉ mang lại vẻ đẹp cho căn phòng mà còn mang lại may mắn, bình an cho chủ nhà....'} />
                        <CamHungComponent.ItemInspiration image={require('../Image/inspiration_4.webp')} title={'Sofa góc và bí quyết tăng tài lộc cho ngôi nhà của bạn'} date={'Thứ Năm, 27/07/2023'} contents={'Bí quyết nào tăng tài lộc cho ngôi nhà với Sofa góc cổ điển? Việc tìm được một vị trí để đặt Sofa góc cổ điển đã...'} />
                        <CamHungComponent.ItemInspiration image={require('../Image/inspiration_5.webp')} title={'Vì sao kệ bếp gỗ xoan đào được nhiều người ưa chuộng'} date={'Thứ Năm, 27/07/2023'} contents={'Kệ bếp là sản phẩm không thể thiếu được trong mỗi gia đình và có độ tùy biến cao nhất vì mỗi gia đình có một...'} />
                    </div>

                    <div className={styles.banner2}>
                        <div>
                            <p style={{ margin: 0, fontWeight: '500' }}>DANH MỤC TIN TỨC</p>
                            <Link to="/" style={{ textDecoration: 'none', fontSize: 17, color: '#889096', fontWeight: '400' }}>Trang chủ</Link> <br />
                            <Link to="/Product" style={{ textDecoration: 'none', fontSize: 17, color: '#889096', fontWeight: '400' }}>Sản phẩm</Link><br />
                            <Link to="/Promotion" style={{ textDecoration: 'none', fontSize: 17, color: '#889096', fontWeight: '400' }}>Khuyến mãi</Link><br />
                            <Link to="/Inspirational" style={{ textDecoration: 'none', fontSize: 17, color: '#889096', fontWeight: '400' }}>Góc cảm hứng</Link><br />
                            <Link to="/e" style={{ textDecoration: 'none', fontSize: 17, color: '#889096', fontWeight: '400' }}>Hướng dẫn thiết lập</Link><br />
                        </div>

                        <div>
                            <p style={{ margin: '30px 0 10px', fontWeight: '500' }}>TIN NỔI BẬT</p>
                            <CamHungComponent.ItemNews title={'Phòng ngủ phong cách Wabi Sabi'} image={'https://bizweb.dktcdn.net/thumb/medium/100/491/756/articles/phong-cach-wabi-sabi-hap-dan-tu.jpg?v=1691427092207'} />
                            <CamHungComponent.ItemNews title={'Phòng ngủ phong cách Loft'} image={'https://bizweb.dktcdn.net/thumb/medium/100/491/756/articles/thiet-ke-bep-phong-cach-loft-102.jpg?v=1691427581617'} />
                            <CamHungComponent.ItemNews title={'Phòng ngủ phong cách Japandi'} image={'https://bizweb.dktcdn.net/thumb/medium/100/491/756/articles/phong-ngu-phong-cach-japandi-dep.jpg?v=1691426187210'} />
                            <CamHungComponent.ItemNews title={'Phòng ngủ phong cách indochine'} image={'https://bizweb.dktcdn.net/thumb/medium/100/491/756/articles/noi-that-biet-thu-phong-cach-ind.jpg?v=1691425189267'} />
                        </div>

                        <div>
                            <p style={{ margin: '30px 0 10px', fontWeight: '500' }}>TAG</p>
                            <p style={{color:'#9b9b9b'}}>bếp,   bí quyết,   cầu thang,   gia đình,   giường gỗ,   màu sắc,   phòng ngủ,   phong thủy,   sofa,   thiết kế</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* footer */}
            <div className={styles.container_Policies}>
                <div style={{ display: 'flex' }}>
                    <CamHungComponent.ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_1.png?1723020948426'} title={'Hotline: 19001993'} desc={'Dịch vụ hỗ trợ bạn 24/7'} />
                    <CamHungComponent.ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_2.png?1723020948426'} title={'Quà tặng hấp dẫn'} desc={'Nhiều ưu đãi khuyến mãi hot'} />
                    <CamHungComponent.ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_3.png?1723020948426'} title={'Đổi trả miễn phí'} desc={'Trong vòng 7 ngày'} />
                    <CamHungComponent.ItemPolicies image={'https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/policies_icon_4.png?1723020948426'} title={'Giá luôn tốt nhất'} desc={'Hoàn tiền nếu nơi khác rẻ hơn'} />
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

        </div>
    )
}
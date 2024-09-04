import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaRegStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import '../CSS/KhuyenMai.css'

export default function PromotionPage() {

    const ItemCoupon = ({ title, desc, code, date }: any) => {
        return (
            <div className="item_Coupon">
                <div className="container_img_Coupon">
                    <img src={require("../Image/coupon.webp")} className="img_Coupon" alt="" />
                </div>

                <div className="body_Coupon">
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className="title_Coupon">{title}</p>
                            <img src={require('../Image/info.png')} style={{ width: '8%', height: '8%' }} alt="" />
                        </div>
                        <p className="desc_Coupon">{desc}</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p className="desc_Coupon">Mã: </p>
                                <p className="title_Coupon">{code}</p>
                            </div>
                            <p className="desc_Coupon">HSD: {date}</p>
                        </div>

                        {title === "FREESHIP" ?
                            (<button className="button_Coupon">Sao chép</button>)
                            :
                            (<img src={require('../Image/outdated.webp')} alt="" style={{ width: '25%' }} />)
                        }
                    </div>
                </div>

            </div>
        )
    }
    const ItemProduct = ({ image, name, sale, price, label, quantity, status }: any) => {
        return (
            <Link
                to="/InforProduct"
                state={{ image, name, sale, price, label, quantity, status }}
                className="itemProduct">
                <div className="img_Product">
                    <img src={image} alt="" style={{ width: '100%', objectFit: 'cover' }} />
                </div>

                <div className="body_Product">
                    <p className="name_Product">{name}</p>
                    <FaRegStar className="icon_star" />
                    <FaRegStar className="icon_star" />
                    <FaRegStar className="icon_star" />
                    <FaRegStar className="icon_star" />
                    <FaRegStar className="icon_star" />
                    <p className="sale_Product">{sale}</p>
                    <div style={{ display: 'flex' }}>
                        <p className="price_Product">{price}</p>
                        <p className="label_Product">-{label}%</p>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <div style={{ flex: 1, backgroundColor: '#fcf4eb' }}>
            {/* header */}
            <div className="main">
                <img src={require('../Image/title_screenproduct_img.webp')} alt="" style={{ width: '100%' }} />

                <div className="scroll_Coupon">
                    <div className="container_Coupon">
                        <ItemCoupon title={"FREESHIP"} desc={"Freeship cho đơn hàng từ 500k"} code={"EGAFREESHIP"} date={"30/12/2024"} />
                        <ItemCoupon title={"GIẢM 50K"} desc={"Freeship cho đơn hàng từ 600k"} code={"GIAM50K"} date={"06/07/2024"} />
                        <ItemCoupon title={"GIẢM 30%"} desc={"Cho các sản phẩm trong Nội thất"} code={"GIAM30"} date={"09/06/2024"} />
                        <ItemCoupon title={"GIẢM 40%"} desc={"Có hiệu lực khi mua 4 sản phẩm"} code={"GIAM40"} date={"20/06/2024"} />
                    </div>
                </div>

                {/* main */}
                <div className="container_Product">
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP115'} price={'31.200.000$'} sale={'62.400.000$'} label={50} quantity={28} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/budwingmelaniecanape3placesgir.jpg?v=1721288299183'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Bọc Vải Siêu Rộng Lewis Extra QP243'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={46} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/rectangle2b82fc8df70254ff7ba5f.jpg?v=1721288309203'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Bọc Vải Phong Cách Scandinavian'} price={'33.750.000₫'} sale={'67.500.000₫'} label={50} quantity={96} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/951481666x12496f7cdf2128e24243.jpg?v=1721288302580'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP113'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={87} image={'https://bizweb.dktcdn.net/thumb/grande/100/491/756/products/anhsanphamd7d53ac32ef245df9fb3.jpg?v=1721288299183'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP115'} price={'31.200.000$'} sale={'62.400.000$'} label={50} quantity={14} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/budwingmelaniecanape3placesgir.jpg?v=1721288299183'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Bọc Vải Siêu Rộng Lewis Extra QP243'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={96} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/rectangle2b82fc8df70254ff7ba5f.jpg?v=1721288309203'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Bọc Vải Phong Cách Scandinavian'} price={'33.750.000₫'} sale={'67.500.000₫'} label={50} quantity={61} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/951481666x12496f7cdf2128e24243.jpg?v=1721288302580'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP113'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={99} image={'https://bizweb.dktcdn.net/thumb/grande/100/491/756/products/anhsanphamd7d53ac32ef245df9fb3.jpg?v=1721288299183'} status={"sale"} />
                </div>
            </div>

            {/* footer */}
            <div style={{ backgroundColor: '#292929', marginTop: 50 }}>
                <div className="container_footer">
                    <div className="item_footer">
                        <img src={require('../Image/image_logo_home_2.webp')} alt="" style={{ width: '80%', padding: '0 0 10px' }} />
                        <p className="title_footer">Siêu thị nội thất EGA</p>
                        <p className="li_menu_footer">Thương hiệu nội thất uy tín và chất lượng, cam kết mang đến những trải nghiệm mua sắm tiện lợi, hiện đại và phong phú</p>
                        <p className="li_menu_footer">Mã số thuế: 12345678999</p>
                        <p className="li_menu_footer"><FontAwesomeIcon icon={faLocationDot} /> Địa chỉ: 70 Lu Gia, District 11, Ho Chi Minh City</p>
                        <p className="li_menu_footer"><FontAwesomeIcon icon={faPhone} /> Số điện thoại: 19006750</p>
                        <p className="li_menu_footer"><FontAwesomeIcon icon={faEnvelope} />support@sapo.vn</p>
                        <p className="li_menu_footer">© Bản quyền thuộc về EGANY| Cung cấp bởi </p>
                    </div>

                    <div className="item_footer">
                        <p className="title_footer">Hỗ trợ khách hàng</p>
                        <p className="li_menu_footer">Giới thiệu</p>
                        <p className="li_menu_footer">Thông tin liên hệ</p>
                        <p className="li_menu_footer">Tra cứu cửa hàng</p>
                        <p className="li_menu_footer">Tư vấn nội thất theo phong thủy</p>
                    </div>

                    <div className="item_footer">
                        <h5 style={{ color: 'white' }}>Chính sách</h5>
                        <p className="li_menu_footer">Điều khoản dịch vụ</p>
                        <p className="li_menu_footer">Chính sách bảo mật</p>
                        <p className="li_menu_footer">Chính sách đổi trả</p>
                        <p className="li_menu_footer">Chính sách giao hàng</p>
                        <p className="li_menu_footer">Chương trình cộng tác viên</p>

                        <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/footer_trustbadge.png?1723020948426" alt="" style={{ marginTop: 50, width: '100%' }} />
                    </div>

                    <div className="item_footer">
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
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaRegStar } from "react-icons/fa"

export default function PromotionPage() {




    const ItemCoupon = ({ title, desc, code, date }: any) => {
        return (
            <div style={{ display: 'flex', width: '25%', padding: '0 5px' }}>

                <div style={{ width: 90, display: 'flex', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderLeftStyle: "solid", borderLeftColor: '#ec720e', borderWidth: 8, borderRadius: 10, boxShadow: '0px 0px 2px 0px' }}>
                    <img src={require("../Image/coupon.webp")} style={{ width: '100%', height: '100%', padding: '10px 5px' }} alt="" />
                </div>

                <div style={{ width: 260, backgroundColor: 'white', borderStyle: 'solid', borderWidth: 0, borderRadius: 10, boxShadow: '0px 0px 2px 0px', padding: '5px 5px' }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ margin: 0, fontWeight: '500', fontSize: 15 }}>{title}</p>
                            <img src={require('../Image/info.png')} style={{ width: 20, height: 20 }} alt="" />
                        </div>
                        <p style={{ margin: 0, fontSize: 13, color: '#888888' }}>{desc}</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ margin: 0, color: '#888888', fontSize: 13 }}>Mã: </p>
                                <p style={{ margin: 0, fontWeight: '500', fontSize: 13 }}>{code}</p>
                            </div>
                            <p style={{ margin: 0, color: '#888888', fontSize: 13 }}>HSD: {date}</p>
                        </div>

                        {title === "FREESHIP" ?
                            (<button style={{ backgroundColor: '#ff7d0f', padding: '4px 8px', border: 0, borderRadius: 5, color: 'white', fontSize: 11, fontWeight: '500' }}>Sao chép</button>)
                            :
                            (<img src={require('../Image/outdated.webp')} alt="" style={{ width: '25%' }} />)
                        }
                    </div>
                </div>

            </div>
        )
    }
    const ItemProduct = ({ image, name, sale, price, label }: any) => {
        return (
            <div style={{ width: '25%', padding: '0 1%' }}>

                <div style={{ height: 280, padding: 10, display: 'flex', justifyContent: 'center', objectPosition: 'center' }}>
                    <img src={image} style={{ width: '100%' }} alt="" />
                </div>

                <div style={{ height: 130 }}>
                    <p style={{ margin: 0, fontWeight: '600', fontSize: 17, overflow: 'hidden' }}>{name}</p>
                    <div style={{ margin: '5px 0' }}>
                        <FaRegStar style={{ color: '#ffbe00' }} />
                        <FaRegStar style={{ color: '#ffbe00' }} />
                        <FaRegStar style={{ color: '#ffbe00' }} />
                        <FaRegStar style={{ color: '#ffbe00' }} />
                        <FaRegStar style={{ color: '#ffbe00' }} />
                    </div>
                    <p style={{ margin: 0, color: 'red', fontWeight: 'bold', fontSize: 16 }}>{sale}</p>
                    <div style={{ display: 'flex' }}>
                        <p style={{ margin: 0, textDecoration: 'line-through', fontSize: 16 }}>{price}</p>
                        <p style={{ margin: '0 10px', alignSelf: 'center', fontSize: 13, backgroundColor: '#e9330d', borderRadius: 20, color: 'white', padding: '1px 5px' }}>-{label}%</p>
                    </div>
                </div>

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
        <div style={{ flex: 1, backgroundColor: '#fcf4eb' }}>
            {/* header */}
            <div style={{ width: '85%', margin: 'auto', paddingTop: 80 }}>
                <img src={require('../Image/title_screenproduct_img.webp')} alt="" style={{ width: '100%' }} />
            </div>

            <div style={{ width: '85%', margin: '40px auto', display: 'flex', justifyContent: 'center' }}>
                <ItemCoupon title={"FREESHIP"} desc={"Freeship cho đơn hàng từ 500k"} code={"EGAFREESHIP"} date={"30/12/2024"} />
                <ItemCoupon title={"GIẢM 50K"} desc={"Freeship cho đơn hàng từ 600k"} code={"GIAM50K"} date={"06/07/2024"} />
                <ItemCoupon title={"GIẢM 30%"} desc={"Cho các sản phẩm trong Nội thất"} code={"GIAM30"} date={"09/06/2024"} />
                <ItemCoupon title={"GIẢM 40%"} desc={"Có hiệu lực khi mua 4 sản phẩm"} code={"GIAM40"} date={"20/06/2024"} />
            </div>

            {/* main */}
            <div style={{ width: '87%', margin: '0 auto', padding: '0 0 50px', backgroundColor: 'white', borderRadius: 20 }}>
                <div style={{ display: 'flex' }}>
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP115'} price={'31.200.000$'} sale={'62.400.000$'} label={50} quantity={28} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/budwingmelaniecanape3placesgir.jpg?v=1721288299183'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Bọc Vải Siêu Rộng Lewis Extra QP243'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={46} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/rectangle2b82fc8df70254ff7ba5f.jpg?v=1721288309203'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Bọc Vải Phong Cách Scandinavian'} price={'33.750.000₫'} sale={'67.500.000₫'} label={50} quantity={96} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/951481666x12496f7cdf2128e24243.jpg?v=1721288302580'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP113'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={87} image={'https://bizweb.dktcdn.net/thumb/grande/100/491/756/products/anhsanphamd7d53ac32ef245df9fb3.jpg?v=1721288299183'} status={"sale"} />
                </div>
                <div style={{ display: 'flex' }}>
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP115'} price={'31.200.000$'} sale={'62.400.000$'} label={50} quantity={14} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/budwingmelaniecanape3placesgir.jpg?v=1721288299183'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Bọc Vải Siêu Rộng Lewis Extra QP243'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={96} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/rectangle2b82fc8df70254ff7ba5f.jpg?v=1721288309203'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Bọc Vải Phong Cách Scandinavian'} price={'33.750.000₫'} sale={'67.500.000₫'} label={50} quantity={61} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/951481666x12496f7cdf2128e24243.jpg?v=1721288302580'} status={"sale"} />
                    <ItemProduct name={'Sofa Băng Phòng Khách Truyền Thống QP113'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={99} image={'https://bizweb.dktcdn.net/thumb/grande/100/491/756/products/anhsanphamd7d53ac32ef245df9fb3.jpg?v=1721288299183'} status={"sale"} />
                </div>
            </div>

            {/* footer */}
            <div>
                <div style={{ padding: '0 7.3%', backgroundColor: '#ec720e', marginTop: 50 }}>
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
                            <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}><FontAwesomeIcon icon={faEnvelope}/>support@sapo.vn</p>
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
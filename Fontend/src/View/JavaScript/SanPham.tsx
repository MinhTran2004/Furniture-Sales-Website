import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaRegStar } from "react-icons/fa"

export default function ProductPage() {

    const ItemCoupon = ({ title, desc, code, date }: any) => {
        return (
            <div style={{ display: 'flex', width: '25%', height: 95, padding: '0 5px' }}>

                <div style={{ width: 90, display: 'flex', justifyContent: 'center', alignItems: 'center', borderLeftStyle: "solid", borderLeftColor: '#ec720e', borderWidth: 8, borderRadius: 10, boxShadow: '0px 0px 2px 0px' }}>
                    <img src={require("../Image/coupon.webp")} style={{ width: '100%', height: '100%', padding: '10px 5px' }} alt="" />
                </div>

                <div style={{ width: 260, borderStyle: 'solid', borderWidth: 0, borderRadius: 10, boxShadow: '0px 0px 2px 0px', padding: '5px 5px 0px' }}>
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
            <div style={{ width: '25%', padding: '0 10px', justifyContent: 'space-around' }}>

                <div style={{ height: 210, display: 'flex', justifyContent: 'center', objectFit: 'cover', objectPosition: 'center' }}>
                    <img src={image} style={{ width: '100%' }} alt="" />
                </div>
                <p style={{ margin: 0, fontWeight: '500', fontSize: 16 }}>{name}</p>
                <div style={{ margin: '5px 0' }}>
                    <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                    <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                    <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                    <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                    <FaRegStar style={{ color: '#ffbe00', fontSize: 15 }} />
                </div>
                <p style={{ margin: 0, color: 'red', fontWeight: 'bold', fontSize: 15 }}>{sale}</p>
                <div style={{ display: 'flex' }}>
                    <p style={{ margin: 0, textDecoration: 'line-through', fontSize: 15 }}>{price}</p>
                    <p style={{ margin: '0 10px', alignSelf: 'center', fontSize: 13, backgroundColor: '#e9330d', borderRadius: 20, color: 'white', padding: '1px 5px' }}>-{label}%</p>
                </div>
            </div>
        )
    }
    const ItemFilter = ({ name, color }: any) => {
        return (
            <div style={{ display: 'flex', marginBottom: 5, alignItems: 'center' }}>
                {color != null ?
                    <div style={{ width: 20, height: 20, backgroundColor: color, borderRadius: 50 }} > </div>
                    :
                    <input type="checkbox" style={{ width: 20, height: 20 }} />
                }
                <p style={{ margin: '0 0 0 5px', fontSize: 14, fontWeight: '500' }}>{name}</p>
            </div>
        )
    }
    return (
        <div style={{ flex: 1 }}>
            {/* header */}
            <div style={{ width: '85%', margin: 'auto', paddingTop: 70 }}>
                <p style={{ fontWeight: '450', fontSize: 16 }}>Trang chủ / <span style={{ fontWeight: '500' }}>Tất cả sản phẩm</span> </p>
                <img src={require('../Image/title_screenproduct_img.webp')} alt="" style={{ width: '100%' }} />
            </div>

            <div style={{ width: '85%', margin: '40px auto', display: 'flex', justifyContent: 'center' }}>
                <ItemCoupon title={"FREESHIP"} desc={"Freeship cho đơn hàng từ 500k"} code={"EGAFREESHIP"} date={"30/12/2024"} />
                <ItemCoupon title={"GIẢM 50K"} desc={"Freeship cho đơn hàng từ 600k"} code={"GIAM50K"} date={"06/07/2024"} />
                <ItemCoupon title={"GIẢM 30%"} desc={"Cho các sản phẩm trong Nội thất"} code={"GIAM30"} date={"09/06/2024"} />
                <ItemCoupon title={"GIẢM 40%"} desc={"Có hiệu lực khi mua 4 sản phẩm"} code={"GIAM40"} date={"20/06/2024"} />
            </div>

            {/* main */}
            <div style={{ width: '85%', margin: '20px auto' }}>

                <p style={{ fontSize: 20, fontWeight: '500' }}>Tất cả sản phẩm</p>
                <div style={{ display: 'flex' }}>

                    {/* filter  */}
                    <div style={{ width: '20%' }}>
                        <div>
                            <p style={{ margin: '0 0 5px', fontWeight: '450', fontSize: 18 }}>LOẠI SẢN PHẨM</p>
                            <ItemFilter name={"Tủ Giày - Tủ Trang Trí"} />
                            <ItemFilter name={"Kệ Tủ Tivi"} />
                            <ItemFilter name={"Ghế Sofa"} />
                            <ItemFilter name={"Bàn - Ghế"} />
                            <ItemFilter name={"Giường"} />
                            <ItemFilter name={"Đèn Treo tường"} />
                            <ItemFilter name={"Ghế bàn Học"} />
                        </div>

                        <div style={{ borderTop: '1px dashed #eee' }}>
                            <p style={{ margin: '10px 0 5px', fontWeight: '450', fontSize: 18 }}>MÀU SẮC</p>
                            <ItemFilter name={"Đen"} color={"black"} />
                            <ItemFilter name={"Nâu nhạt"} color={"#a77862"} />
                            <ItemFilter name={"Xanh lá"} color={"#93c062"} />
                            <ItemFilter name={"Hồng"} color={"#f5cac8"} />
                            <ItemFilter name={"Đỏ"} color={"#ec042f"} />
                            <ItemFilter name={"Trắng"} color={"#f1f0f1"} />
                            <ItemFilter name={"Cam"} color={"#f8632e"} />
                            <ItemFilter name={"Tím"} color={"#7f00d9"} />
                        </div>

                        <div style={{ borderTop: '1px dashed #eee' }}>
                            <p style={{ margin: '10px 0 8px', fontWeight: '450', fontSize: 18 }}>MỨC GIÁ</p>
                            <ItemFilter name={"Giá dưới 1.000.000₫"} />
                            <ItemFilter name={"1.000.000₫ - 2.000.000₫"} />
                            <ItemFilter name={"2.000.000₫ - 3.000.000₫"} />
                            <ItemFilter name={"3.000.000₫ - 5.000.000₫"} />
                            <ItemFilter name={"5.000.000₫ - 7.000.000₫"} />
                            <ItemFilter name={"7.000.000₫ - 10.000.000₫"} />
                            <ItemFilter name={"Giá trên 10.000.000₫"} />
                        </div>
                        <div style={{ borderTop: '1px dashed #eee' }}>
                            <p style={{ margin: '10px 0 8px', fontWeight: '450', fontSize: 18 }}>DỊCH VỤ GIAO HÀNG</p>
                            <ItemFilter name={"Giá dưới 1.000.000₫"} />
                            <ItemFilter name={"1.000.000₫ - 2.000.000₫"} />
                            <ItemFilter name={"2.000.000₫ - 3.000.000₫"} />
                            <ItemFilter name={"3.000.000₫ - 5.000.000₫"} />
                            <ItemFilter name={"5.000.000₫ - 7.000.000₫"} />
                            <ItemFilter name={"7.000.000₫ - 10.000.000₫"} />
                            <ItemFilter name={"Giá trên 10.000.000₫"} />
                        </div>
                    </div>

                    {/* product  */}
                    <div style={{ width: '80%' }}>

                        <div>
                            <div style={{ display: 'flex', marginTop: 30 }}>
                                <ItemProduct name={'Đèn tường Studio'} sale={'5.800.000₫'} price={'8.900.000₫'} label={'35'} image={require('../Image/arrival_1.webp')} />
                                <ItemProduct name={'Đèn tường Wally'} sale={'5.500.000₫'} price={'8.900.000₫'} label={'39'} image={require('../Image/arrival_2.webp')} />
                                <ItemProduct name={'Mochi Pouffe / Nhiều màu'} sale={'7.290.000₫'} price={'8.300.000₫'} label={'13'} image={require('../Image/arrival_3.webp')} />
                                <ItemProduct name={'Bàn Cà Phê Raw Đá Cẩm Thạch'} sale={'12.250.000₫'} price={'16.500.000'} label={'26'} image={require('../Image/arrival_4.webp')} />
                            </div>
                            <div style={{ display: 'flex', marginTop: 30 }}>
                                <ItemProduct name={'Đèn tường Studio'} sale={'5.800.000₫'} price={'8.900.000₫'} label={'35'} image={require('../Image/arrival_1.webp')} />
                                <ItemProduct name={'Đèn tường Wally'} sale={'5.500.000₫'} price={'8.900.000₫'} label={'39'} image={require('../Image/arrival_2.webp')} />
                                <ItemProduct name={'Mochi Pouffe / Nhiều màu'} sale={'7.290.000₫'} price={'8.300.000₫'} label={'13'} image={require('../Image/arrival_3.webp')} />
                                <ItemProduct name={'Bàn Cà Phê Raw Đá Cẩm Thạch'} sale={'12.250.000₫'} price={'16.500.000'} label={'26'} image={require('../Image/arrival_4.webp')} />
                            </div>
                            <div style={{ display: 'flex', marginTop: 30 }}>
                                <ItemProduct name={'Đèn tường Studio'} sale={'5.800.000₫'} price={'8.900.000₫'} label={'35'} image={require('../Image/arrival_1.webp')} />
                                <ItemProduct name={'Đèn tường Wally'} sale={'5.500.000₫'} price={'8.900.000₫'} label={'39'} image={require('../Image/arrival_2.webp')} />
                                <ItemProduct name={'Mochi Pouffe / Nhiều màu'} sale={'7.290.000₫'} price={'8.300.000₫'} label={'13'} image={require('../Image/arrival_3.webp')} />
                                <ItemProduct name={'Bàn Cà Phê Raw Đá Cẩm Thạch'} sale={'12.250.000₫'} price={'16.500.000'} label={'26'} image={require('../Image/arrival_4.webp')} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div style={{ marginTop: 80 }}>
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
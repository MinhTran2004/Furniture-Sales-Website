import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaFilter, FaRegStar } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom"
import {useEffect, useRef, useState } from "react"
import styles from "../CSS/SanPham.module.css"
import { ProductSevice } from "../../Sevice/ProductSevice"
import { ProductModel } from "../../Model/ProductModel"

export default function ProductPage() {
    const drawFilter = useRef<any>(null);
    const [data, setData] = useState<ProductModel[]>([]);

    const ConvertMoney = (price:String) => {
        const convertMoney = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return convertMoney;
    }
    const getAllProduct = async () => {
        try {
            const reponse = await ProductSevice.getAllProductByFilter("All", "");
            setData(reponse);
            // eslint-disable-next-line
        } catch (err) {
            console.log(err);
        }
    }
    const ItemFilter = ({ name, color }: any) => {
        return (
            <div style={{ display: 'flex', marginBottom: 5, alignItems: 'center' }}>
                {color != null ?
                    (<div style={{display: 'flex'}} onClick={() => getAllProductByFilter("color", name)}>
                        <div style={{ width: 20, height: 20, backgroundColor: color, borderRadius: 50 }}></div>
                        <p style={{ margin: '0 0 0 5px', fontSize: 13, fontWeight: '500' }}>{name}</p>
                    </div>)
                    :
                    ( 
                    <div style={{display: 'flex'}} onClick={() => getAllProductByFilter("category", name)}>
                        <input type="radio" style={{ width: 20, height: 20 }} name="hihi"/>
                        <p style={{ margin: '0 0 0 5px', fontSize: 13, fontWeight: '500' }}>{name}</p>
                    </div>)
                }
            </div>
        )
    }

    const getAllProductByFilter = async (filter: String, data: String) => {
        try {
            const reponse = await ProductSevice.getAllProductByFilter(filter, data);
            setData(reponse);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getAllProduct();
    }, [])

    // componenet 
    const changeDraw = () => {
        if (drawFilter.current) {
            drawFilter.current.style.display =
                drawFilter.current.style.display === 'block' ? 'none' : 'block';
        }
    };
    const ItemCoupon = ({ title, desc, code, date }: any) => {
        return (
            <div className={styles.item_Coupon}>
                <div className={styles.container_img_Coupon}>
                    <img src={require("../Image/coupon.webp")} className={styles.img_Coupon} alt="" />
                </div>

                <div className={styles.body_Coupon}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className={styles.title_Coupon}>{title}</p>
                            <img src={require('../Image/info.png')} style={{ width: '8%', height: '8%' }} alt="" />
                        </div>
                        <p className={styles.desc_Coupon}>{desc}</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p className={styles.desc_Coupon}>Mã: </p>
                                <p className={styles.title_Coupon}>{code}</p>
                            </div>
                            <p className={styles.desc_Coupon}>HSD: {date}</p>
                        </div>

                        {title === "FREESHIP" ?
                            (<button className={styles.button_Coupon}>Sao chép</button>)
                            :
                            (<img src={require('../Image/outdated.webp')} alt="" style={{ width: '25%' }} />)
                        }
                    </div>
                </div>

            </div>
        )
    }
    const ItemProduct = ( {product}:any) => {
        return (
            <Link
                to="/ThongTinSanPham"
                state={product}
                className={styles.itemProduct}>
                <div className={styles.img_Product}>
                    <img src={product.image[0].imageProduct} alt="" style={{ width: '100%' }} />
                </div>

                <div className={styles.body_Product}>
                    <p className={styles.name_Product}>{product.name}</p>
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <p className={styles.sale_Product}>{ConvertMoney(product.sale)}</p>
                    <div style={{ display: 'flex' }}>
                        <p className={styles.price_Product}>{ConvertMoney(product.price)}</p>
                        <p className={styles.label_Product}>-{product.label}%</p>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <div>
            {/* header */}
            <div className={styles.main}>
                <p style={{ fontSize: 16, margin: '10px 0' }}>Trang chủ / <span style={{ fontWeight: '500' }}>Tất cả sản phẩm</span> </p>
                <img src={require('../Image/title_screenproduct_img.webp')} alt="" style={{ width: '100%' }} />

                <div className={styles.scroll_Coupon}>
                    <div className={styles.container_Coupon}>
                        <ItemCoupon title={"FREESHIP"} desc={"Freeship cho đơn hàng từ 500k"} code={"EGAFREESHIP"} date={"30/12/2024"} />
                        <ItemCoupon title={"GIẢM 50K"} desc={"Freeship cho đơn hàng từ 600k"} code={"GIAM50K"} date={"06/07/2024"} />
                        <ItemCoupon title={"GIẢM 30%"} desc={"Cho các sản phẩm trong Nội thất"} code={"GIAM30"} date={"09/06/2024"} />
                        <ItemCoupon title={"GIẢM 40%"} desc={"Có hiệu lực khi mua 4 sản phẩm"} code={"GIAM40"} date={"20/06/2024"} />
                    </div>
                </div>

                {/* main */}
                <div className={styles.title}>
                    <p style={{ fontSize: 25, fontWeight: '500', margin: '30px 10px' }} onClick={() => getAllProduct()}>Tất cả sản phẩm</p>
                    <FaFilter className={styles.icon_filter} onClick={() => changeDraw()} />
                </div>

                <div style={{ display: 'flex' }}>

                    {/* filter  */}
                    <div className={styles.left_Filter}>
                        <div>
                            <p style={{ margin: '0 0 5px', fontWeight: '450', fontSize: 18 }}>LOẠI SẢN PHẨM</p>
                            <ItemFilter name={"Bàn"} />
                            <ItemFilter name={"Ghế Sofa"} />
                            <ItemFilter name={"Ghế"} />
                            <ItemFilter name={"Đèn"} />
                            <ItemFilter name={"Tủ Giày - Tủ Trang Trí"} />
                            <ItemFilter name={"Giường"} />
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
                    </div>

                    {/* product  */}
                    <div className={styles.container_Product}>
                        {data.map((product:ProductModel ) => (
                            <ItemProduct key={product._id} product = {product} />
                        ))}
                    </div>
                </div>
            </div>

            {/* filter  */}
            <div className={styles.right_Filter} ref={drawFilter}>
                <IoMdClose onClick={() => changeDraw()} />
                <div style={{ overflowY: 'auto', height: '100%' }}>
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
            </div>

            {/* footer */}
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
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaFilter } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { useEffect, useRef, useState } from "react"
import styles from "../CSS/SanPham.module.css"
import { ProductModel } from "../../Model/ProductModel"
import { ProductController } from "../../Controller/ProductController"
import { SanPhamComponent } from "../Component/SanPhamComponent" 

export default function ProductPage() {
    const drawFilter = useRef<any>(null);
    const [data, setData] = useState<ProductModel[]>([]);

    const getAllProduct = async () => {
        try {
            const reponse = await ProductController.getAllProductByFilter("All", "");
            setData(reponse);
            // eslint-disable-next-line
        } catch (err) {
            console.log(err);
        }
    }

    const getAllProductByFilter = async (filter: String, data: String) => {
        try {
            const reponse = await ProductController.getAllProductByFilter(filter, data);
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


    return (
        <div>
            {/* header */}
            <div className={styles.main}>
                <p style={{ fontSize: 16, margin: '10px 0' }}>Trang chủ / <span style={{ fontWeight: '500' }}>Tất cả sản phẩm</span> </p>
                <img src={require('../Image/title_screenproduct_img.webp')} alt="" style={{ width: '100%' }} />

                <div className={styles.scroll_Coupon}>
                    <div className={styles.container_Coupon}>
                        <SanPhamComponent.ItemCoupon title={"FREESHIP"} desc={"Freeship cho đơn hàng từ 500k"} code={"EGAFREESHIP"} date={"30/12/2024"} />
                        <SanPhamComponent.ItemCoupon title={"GIẢM 50K"} desc={"Freeship cho đơn hàng từ 600k"} code={"GIAM50K"} date={"06/07/2024"} />
                        <SanPhamComponent.ItemCoupon title={"GIẢM 30%"} desc={"Cho các sản phẩm trong Nội thất"} code={"GIAM30"} date={"09/06/2024"} />
                        <SanPhamComponent.ItemCoupon title={"GIẢM 40%"} desc={"Có hiệu lực khi mua 4 sản phẩm"} code={"GIAM40"} date={"20/06/2024"} />
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
                            <SanPhamComponent.ItemFilter name={"Bàn"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Ghế Sofa"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Ghế"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Đèn"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Tủ Giày - Tủ Trang Trí"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Giường"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Ghế bàn Học"} event={getAllProductByFilter} />
                        </div>

                        <div style={{ borderTop: '1px dashed #eee' }}>
                            <p style={{ margin: '10px 0 5px', fontWeight: '450', fontSize: 18 }}>MÀU SẮC</p>
                            <SanPhamComponent.ItemFilter name={"Đen"} color={"black"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Nâu nhạt"} color={"#a77862"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Xanh lá"} color={"#93c062"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Hồng"} color={"#f5cac8"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Đỏ"} color={"#ec042f"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Trắng"} color={"#f1f0f1"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Cam"} color={"#f8632e"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Tím"} color={"#7f00d9"} event={getAllProductByFilter} />
                        </div>

                        <div style={{ borderTop: '1px dashed #eee' }}>
                            <p style={{ margin: '10px 0 8px', fontWeight: '450', fontSize: 18 }}>MỨC GIÁ</p>
                            <SanPhamComponent.ItemFilter name={"Giá dưới 1.000.000₫"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"1.000.000₫ - 2.000.000₫"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"2.000.000₫ - 3.000.000₫"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"3.000.000₫ - 5.000.000₫"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"5.000.000₫ - 7.000.000₫"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"7.000.000₫ - 10.000.000₫"} event={getAllProductByFilter} />
                            <SanPhamComponent.ItemFilter name={"Giá trên 10.000.000₫"} event={getAllProductByFilter} />
                        </div>
                    </div>

                    {/* product  */}
                    <div className={styles.container_Product}>
                        {data.map((product) => (
                            <SanPhamComponent.ItemProduct key={product._id} {...product} />
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
                        <SanPhamComponent.ItemFilter name={"Bàn"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Ghế Sofa"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Ghế"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Đèn"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Tủ Giày - Tủ Trang Trí"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Giường"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Ghế bàn Học"} event={getAllProductByFilter} />
                    </div>

                    <div style={{ borderTop: '1px dashed #eee' }}>
                        <p style={{ margin: '10px 0 5px', fontWeight: '450', fontSize: 18 }}>MÀU SẮC</p>
                        <SanPhamComponent.ItemFilter name={"Đen"} color={"black"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Nâu nhạt"} color={"#a77862"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Xanh lá"} color={"#93c062"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Hồng"} color={"#f5cac8"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Đỏ"} color={"#ec042f"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Trắng"} color={"#f1f0f1"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Cam"} color={"#f8632e"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Tím"} color={"#7f00d9"} event={getAllProductByFilter} />
                    </div>

                    <div style={{ borderTop: '1px dashed #eee' }}>
                        <p style={{ margin: '10px 0 8px', fontWeight: '450', fontSize: 18 }}>MỨC GIÁ</p>
                        <SanPhamComponent.ItemFilter name={"Giá dưới 1.000.000₫"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"1.000.000₫ - 2.000.000₫"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"2.000.000₫ - 3.000.000₫"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"3.000.000₫ - 5.000.000₫"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"5.000.000₫ - 7.000.000₫"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"7.000.000₫ - 10.000.000₫"} event={getAllProductByFilter} />
                        <SanPhamComponent.ItemFilter name={"Giá trên 10.000.000₫"} event={getAllProductByFilter} />
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
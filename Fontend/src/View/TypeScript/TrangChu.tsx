import { faAngleRight, faCalendarDays, faEnvelope, faLocationDot, faPhone, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProgressBar } from "react-bootstrap"
import { FaRegStar } from "react-icons/fa"
import { Link } from "react-router-dom";
import styles from "../CSS/TrangChu.module.css";
import { useEffect, useState } from "react";
import { ProductSevice } from "../../Sevice/ProductSevice";
import { ProductModel } from "../../Model/ProductModel";

interface ItemFlashSale {
    product: ProductModel;
    status: String;
}

export default function HomePage() {
    const [dataFlashSale1, setDataFlashSale1] = useState<ProductModel[]>([]);
    const [dataFlashSale2, setDataFlashSale2] = useState<ProductModel[]>([]);

    const ConvertMoney = (price:String) => {
        const convertMoney = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return convertMoney;
    }

    const getData = async () => {
        try {
            const reponse = await ProductSevice.getAllProduct();
            setDataFlashSale1(reponse.filter((item: ProductModel) => item.type === "Ghế Sofa"));
            setDataFlashSale2(reponse.filter((item: ProductModel) => item.type === "Đèn" || item.type === "Ghế"));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const ItemSeasonColl = ({ img, nameRoom, quantity }: any) => {
        return (
            <div className={styles.item_SeasonColl}>
                <img src={img} alt="" className={styles.image_SeasonColl} />
                <p className={styles.title_SeasonColl}>{nameRoom}</p>
                <p className={styles.number_SeasonColl}>{quantity} sản phẩm</p>
            </div>
        )
    }
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
    const ItemFlashSale = ({ product, status }: ItemFlashSale) => {
        return (
            <Link
                to="/ThongTinSanPham"
                state={ product }
                className={styles.itemFlashSale}>
                <div className={styles.img_FlashSale}>
                    <img src={product.image[0].imageProduct} alt="" style={{ width: '100%', objectFit: 'contain' }} />
                </div>
                <div className={styles.body_FlashSale}>
                    <p className={styles.name_FlashSale}>{product.name}</p>
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <p className={styles.sale_FlashSale}>{ConvertMoney(product.sale)}</p>
                    <div style={{ display: 'flex' }}>
                        <p className={styles.price_FlashSale}>{ConvertMoney(product.price)}</p>
                        <p className={styles.label_FlashSale}>-{product.label}%</p>
                    </div>
                </div>

                {status === "sale" ? (
                    Number(product.quantity) > 80 ? (
                        <div style={{ marginTop: 10 }}>
                            <div style={{ display: 'flex', margin: '6px 0', alignItems: 'center' }}>
                                <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/fire-icon.svg?1723020948426" style={{ width: '5%', height: '5%' }} alt="" />
                                <p className={styles.quantity_FlashSale}>Sắp cháy hàng</p>
                            </div>
                            <ProgressBar variant={"warning"} now={Number(product.quantity)} className={styles.progressBar_FlashSale} />
                        </div>)
                        :
                        (<div style={{ marginTop: 10 }}>
                            <p className={styles.quantity_FlashSale}>Đã bán <span style={{ color: 'red' }}>{product.quantity}</span> sản phẩm</p>
                            <ProgressBar variant={"warning"} now={Number(product.quantity)} className={styles.progressBar_FlashSale} />
                        </div>)
                )
                    :
                    null}
            </Link>
        )
    }
    const ItemLookbook = ({ image, title, info }: any) => {
        return (
            <div style={{ width: '33%', textAlign: 'center', padding: '0 10px' }}>
                <img src={image} alt="" style={{ width: '100%' }} />
                <p className={styles.title_Lookbook}>{title}</p>
                <a href="#pb">{info}</a>
            </div>
        )
    }
    const ItemYoutube = ({ image }: any) => {
        return (
            <div style={{ width: '25%', position: 'relative' }}>
                <a href="#a">
                    <img src={image} alt="" style={{ width: '100%', padding: 5 }} />
                    <FontAwesomeIcon icon={faPlay} style={{ position: 'absolute', top: '50%', left: '45%', color: 'red', backgroundColor: 'white', padding: '13px 15px', borderRadius: '100%', opacity: 0.5 }} />
                </a>
            </div>
        )
    }
    const ItemInspiration = ({ image, title, date, contents }: any) => {
        return (
            <div style={{ padding: 10 }}>
                <img src={image} alt="" style={{ width: '100%', borderRadius: 10 }} />
                <p>{title}</p>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: '95%' }} />
                    <p className={styles.date_Inspiration}>{date}</p>
                </div>
                <p className={styles.contents_Inspiration}>{contents}</p>
                <a href="#doc" style={{ color: 'black', fontSize: 14 }}>Đọc tiếp</a>
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
        <div style={{ flex: 1, paddingTop: 60 }}>
            <img src={require("../Image/slider_1.webp")} alt="" style={{ width: '100%' }} />

            {/* main */}
            <div className={styles.main}>
                <p className={styles.title}>Danh mục sản phẩm</p>

                <div className={styles.container_SeasonColl}>
                    <ItemSeasonColl img={require('../Image/season_coll_1_img.webp')} nameRoom={"Phòng khách"} quantity={"11"} />
                    <ItemSeasonColl img={require('../Image/season_coll_2_img.webp')} nameRoom={"Phòng ngủ"} quantity={"8"} />
                    <ItemSeasonColl img={require('../Image/season_coll_3_img.webp')} nameRoom={"Nhà bếp"} quantity={"8"} />
                    <ItemSeasonColl img={require('../Image/season_coll_4_img.webp')} nameRoom={"Phòng làm việc"} quantity={"9"} />
                    <ItemSeasonColl img={require('../Image/season_coll_5_img.webp')} nameRoom={"Dèn trang trí"} quantity={"2"} />
                    <ItemSeasonColl img={require('../Image/season_coll_6_img.webp')} nameRoom={"Kệ lưu giữ"} quantity={"11"} />
                </div>

                <div className={styles.scroll_Coupon}>
                    <div className={styles.container_Coupon}>
                        <ItemCoupon title={"FREESHIP"} desc={"Freeship cho đơn hàng từ 500k"} code={"EGAFREESHIP"} date={"30/12/2024"} />
                        <ItemCoupon title={"GIẢM 50K"} desc={"Freeship cho đơn hàng từ 600k"} code={"GIAM50K"} date={"06/07/2024"} />
                        <ItemCoupon title={"GIẢM 30%"} desc={"Cho các sản phẩm trong Nội thất"} code={"GIAM30"} date={"09/06/2024"} />
                        <ItemCoupon title={"GIẢM 40%"} desc={"Có hiệu lực khi mua 4 sản phẩm"} code={"GIAM40"} date={"20/06/2024"} />
                    </div>
                </div>

                <div className={styles.banner1}>
                    <p className={styles.title} style={{ textAlign: 'left' }}>HAPPY SUMMER - GIẢM ĐẾN 50%</p>
                    <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/flashsale-hot.png?1723020948426" alt="" style={{ width: '3%', marginLeft: 5 }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                    {dataFlashSale1.map((product, index) => (
                        <ItemFlashSale key={index} product={product} status={"sale"} />
                    ))}
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                    <Link to={'/SanPham'} className={styles.btn_allProduct}>Xem tất cả <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 15 }} /> </Link>
                </div>

                {/* main 2 */}
                <p className={styles.title}>Chứng nhận về chúng tôi</p>
                <div>
                    <img src={require('../Image/brand_1.webp')} alt="" style={{ width: '25%' }} />
                    <img src={require('../Image/brand_2.webp')} alt="" style={{ width: '25%' }} />
                    <img src={require('../Image/brand_3.webp')} alt="" style={{ width: '25%' }} />
                    <img src={require('../Image/brand_4.webp')} alt="" style={{ width: '25%' }} />
                </div>
                <div style={{ textAlign: 'center', backgroundColor: '#ffebd4', marginTop: 60 }}>
                    <img src={require('../Image/lookbook_oneproduct_img.webp')} alt="" style={{ width: '100%' }} />

                    <div style={{ width: '80%', margin: '10px auto' }}>
                        <h3>PHÒNG NGỦ HẠNH PHÚC</h3>
                        <p>Đắm mình trong chiếc giường trang trí với bộ khăn trải giường sang trọng, sự kết hợp giữa chất liệu vải xa hoa và đồ nội thất được sắp xếp hợp lý để tạo nên một thiên đường ngủ xa hoa. Lấy cảm hứng và biến nhạt nhẽo thành hạnh phúc.</p>
                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: ' 0 0 20px' }}>
                        <Link to={'/Promotion'} style={{ color: '#ec720e', border: '1px solid #ec720e', borderRadius: 5, padding: '5px 15px', textDecoration: 'none' }}>Xem tất cả</Link>
                    </div>
                </div>

                <p className={styles.title}>BST NỘI THẤT DÀNH CHO BẠN</p>

                <div style={{ display: 'flex' }}>
                    <ItemLookbook image={require('../Image/lookbook_1_image.webp')} title={'BST Phòng Bếp'} info={'Xem chi tiết'} />
                    <ItemLookbook image={require('../Image/lookbook_2_image.webp')} title={'BST Phòng Bếp'} info={'Xem chi tiết'} />
                    <ItemLookbook image={require('../Image/lookbook_3_image.webp')} title={'BST Phòng Bếp'} info={'Xem chi tiết'} />
                </div>

                <div style={{ marginTop: 50 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4>NEW ARRIVAL</h4>
                            <p className={styles.title}>NỘI THẤT HIỆN ĐẠI</p>
                        </div>
                        <Link to={"/Product"} style={{ fontSize: 18, color: 'black' }}>Xem tất cả</Link>
                    </div>

                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                            {dataFlashSale2.map((product, index) => (
                                <ItemFlashSale key={index} product={product} status={""} />
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
                    <img src={require('../Image/img_story.webp')} alt="" style={{ width: '35%', height: '50%' }} />
                    <div className={styles.text_stoty} >
                        <h3>Một chút câu chuyện</h3>
                        <p>Với ước mơ tạo ra thứ gì đó đặc biệt, EGA Furniture đã thành lập vào năm 2010. Tầm nhìn không chỉ là tạo ra những sản phẩm mang lại niềm vui cho thế giới những người yêu thích thiết kế nội thất mà họ còn muốn tạo ra một nền văn hóa công ty nơi nhân viên cảm thấy thoải mái. Vì vậy, từ khóa hạnh phúc đã ăn sâu vào DNA thương hiệu của chúng tôi.</p>
                        <p style={{ fontWeight: 'bold' }}>Hạnh phúc là ở xung quanh bạn những người tốt và những sản phẩm mang lại niềm vui.</p>
                        <a href="#story" style={{ color: 'black' }}>Xem chi tiết <FontAwesomeIcon icon={faAngleRight} style={{ fontSize: 15 }} /></a>
                    </div>
                </div>

                <img src={require('../Image/slide_3.webp')} style={{ width: '100%', marginTop: 60 }} alt="" />

                <div style={{ marginTop: 50 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4>Ưu đãi</h4>
                            <p className={styles.title}>NỘI THẤT PHÒNG BẾP</p>
                        </div>
                        <a href="#hiendai" style={{ fontSize: 18, color: 'black' }}>Xem tất cả</a>
                    </div>

                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                            {dataFlashSale2.map((product, index) => (
                                <ItemFlashSale key={index} product={product} status={""} />

                            ))}
                        </div>
                    </div>
                </div>

                {/* main 3 */}

                <p className={styles.title}>VIDEO ĐƯỢC XEM NHIỀU NHẤT</p>

                <div style={{ margin: '30px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <ItemYoutube image={require('../Image/video_1_img.webp')} />
                    <ItemYoutube image={require('../Image/video_2_img.webp')} />
                    <ItemYoutube image={require('../Image/video_3_img.webp')} />
                    <ItemYoutube image={require('../Image/video_4_img.webp')} />
                </div>

                <p className={styles.title}>@ FOLLOW INSTAGRAM</p>

                <div style={{ display: 'flex', marginTop: 20 }}>
                    <img src={require('../Image/insta_1_img.webp')} style={{ width: '20%', padding: '0 3px' }} alt="" />
                    <img src={require('../Image/insta_2_img.webp')} style={{ width: '20%', padding: '0 3px' }} alt="" />
                    <img src={require('../Image/insta_3_img.webp')} style={{ width: '20%', padding: '0 3px' }} alt="" />
                    <img src={require('../Image/insta_4_img.webp')} style={{ width: '20%', padding: '0 3px' }} alt="" />
                    <img src={require('../Image/insta_5_img.webp')} style={{ width: '20%', padding: '0 3px' }} alt="" />
                </div>

                <div style={{ position: 'relative', marginTop: 50 }}>
                    <a href="#a">
                        <img src={require('../Image/video_5_img.webp')} alt="" style={{ width: '100%' }} />
                        <FontAwesomeIcon icon={faPlay} style={{ position: 'absolute', top: '50%', left: '50%', color: '#babbbd', backgroundColor: 'white', padding: '20px 25px', fontSize: 25, borderRadius: '100%' }} />
                    </a>
                </div>

                <p className={styles.title} style={{ textAlign: 'left' }}>GÓC CẢM HỨNG</p>

                <div className={styles.container_Inspiration}>
                    <ItemInspiration image={require('../Image/inspiration_1.webp')} title={'Cách trang trí cầu thang gỗ'} date={'Thứ Năm, 27/07/2023'} contents={'Trang trí cầu thang là một phần quan trọng trong nội thất của một ngôi nhà của bạn. Xu hướng sử dụng...'} />
                    <ItemInspiration image={require('../Image/inspiration_2.webp')} title={'Vợ chồng và cách chọn giường ngủ'} date={'Thứ Năm, 27/07/2023'} contents={'Cuộc sống vợ chồng rất quan trọng về vấn đề hòa hợp, bởi vậy trước khi cưới thường có tục...'} />
                    <ItemInspiration image={require('../Image/inspiration_3.webp')} title={'Sofa gia đình - bài trí sao cho hợp phong thủy?'} date={'Thứ Năm, 27/07/2023'} contents={'Việc bố trí sofa đúng cách không chỉ mang lại vẻ đẹp cho căn phòng mà còn mang lại may...'} />
                    <ItemInspiration image={require('../Image/inspiration_4.webp')} title={'Sofa góc và bí quyết tăng tài lộc cho ngôi nhà của bạn'} date={'Thứ Năm, 27/07/2023'} contents={'Bí quyết nào tăng tài lộc cho ngôi nhà với Sofa góc cổ điển? Việc tìm được một vị trí để...'} />
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

        </div>
    )
}
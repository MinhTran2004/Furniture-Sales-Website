import { Link } from "react-router-dom";
import { ProductModel } from "../../Model/ProductModel";
import styles from "../CSS/TrangChu.module.css";
import { FaRegStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faPlay } from "@fortawesome/free-solid-svg-icons";

export class TrangChuComponent {
    static ConvertMoney = (price:String) => {
        const convertMoney = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return convertMoney;
    }

    // compnent
    static ItemFlashSale = (product:ProductModel) => {
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
                    <p className={styles.sale_FlashSale}>{this.ConvertMoney(product.sale)}</p>
                    <div style={{ display: 'flex' }}>
                        <p className={styles.price_FlashSale}>{this.ConvertMoney(product.price)}</p>
                        <p className={styles.label_FlashSale}>-{product.label}%</p>
                    </div>
                </div>
            </Link>
        )
    }
    static ItemSeasonColl = ({ img, nameRoom, quantity }: any) => {
        return (
            <div className={styles.item_SeasonColl}>
                <img src={img} alt="" className={styles.image_SeasonColl} />
                <p className={styles.title_SeasonColl}>{nameRoom}</p>
                <p className={styles.number_SeasonColl}>{quantity} sản phẩm</p>
            </div>
        )
    }
    static ItemCoupon = ({ title, desc, code, date }: any) => {
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
    static ItemLookbook = ({ image, title, info }: any) => {
        return (
            <div style={{ width: '33%', textAlign: 'center', padding: '0 10px' }}>
                <img src={image} alt="" style={{ width: '100%' }} />
                <p className={styles.title_Lookbook}>{title}</p>
                <a href="#pb">{info}</a>
            </div>
        )
    }
    static ItemYoutube = ({ image }: any) => {
        return (
            <div style={{ width: '25%', position: 'relative' }}>
                <a href="#a">
                    <img src={image} alt="" style={{ width: '100%', padding: 5 }} />
                    <FontAwesomeIcon icon={faPlay} style={{ position: 'absolute', top: '50%', left: '45%', color: 'red', backgroundColor: 'white', padding: '13px 15px', borderRadius: '100%', opacity: 0.5 }} />
                </a>
            </div>
        )
    }
    static ItemInspiration = ({ image, title, date, contents }: any) => {
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
    static ItemPolicies = ({ image, title, desc }: any) => {
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
}
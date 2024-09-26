import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { ProductModel } from "../../Model/ProductModel";
import styles from "../CSS/KhuyenMai.module.css";

export class KhuyenMaiComponent{
    static ConvertMoney = (price:String) => {
        const convertMoney = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return convertMoney;
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
    static ItemProduct = (item : ProductModel) => {
        return (
            <Link
                to="/ThongTinSanPham"
                state={item}
                className={styles.itemProduct}>
                <div className={styles.img_Product}>
                    <img src={item.image[0].imageProduct} alt="" style={{ width: '100%' }} />
                </div>

                <div className={styles.body_Product}>
                    <p className={styles.name_Product}>{item.name}</p>
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <p className={styles.sale_Product}>{this.ConvertMoney(item.sale)}</p>
                    <div style={{ display: 'flex' }}>
                        <p className={styles.price_Product}>{this.ConvertMoney(item.price)}</p>
                        <p className={styles.label_Product}>-{item.label}%</p>
                    </div>
                </div>
            </Link>
        )
    }
}
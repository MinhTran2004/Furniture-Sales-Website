import { FaRegStar } from "react-icons/fa";
import styles from "../CSS/GioHang.module.css";

export class GioHangComponent{
    static ConvertMoney = (price: String) => {
        const convertMoney = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return convertMoney;
    }

    static ItemFlashSale = ({ name, price, sale, label, image }: any) => {
        return (
            <div className={styles.itemFlashSale}>
                <div className={styles.img_FlashSale}>
                    <img src={image} alt="" style={{ width: '100%', objectFit: 'contain' }} />
                </div>

                <div className={styles.body_FlashSale}>
                    <p className={styles.name_FlashSale}>{name}</p>
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <FaRegStar className={styles.icon_star} />
                    <p className={styles.sale_FlashSale}>{this.ConvertMoney(sale)}</p>
                    <div style={{ display: 'flex' }}>
                        <p className={styles.price_FlashSale}>{this.ConvertMoney(price)}</p>
                        <p className={styles.label_FlashSale}>-{label}%</p>
                    </div>
                </div>
            </div>
        )
    }
}
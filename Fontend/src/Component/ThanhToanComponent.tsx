import styles from "../CSS/ThanhToan.module.css";
import { CartModel } from "../Model/CartModel";

export class ThanhToanComponent {
    static ConvertMoney = (price: String) => {
        const convertMoney = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return convertMoney;
    }
    static ItemProduct = (item: CartModel) => {
        return (
            <div style={{ display: 'flex', marginBottom: 15, padding: '0 10px' }}>
                <div className={styles.container_image}>
                    <img src={item.image} alt="" className={styles.image_product} />
                </div>
                <div className={styles.container_text}>
                    <div>
                        <p className={styles.name_product}>{item.name}</p>
                        {item.color ?
                            <p className={styles.color_product} style={{ color: '#7a7a7a' }}>{item.color}</p>
                            :
                            <div className={styles.color_product} style={{ backgroundColor: 'white', height:23, width: 20 }}></div>
                        }
                        <p className={styles.color_product}>x{item.quantity}</p>
                    </div>
                    <p className={styles.price_product}>{this.ConvertMoney(item.price)}₫</p>
                </div>
            </div>
        )
    }
}
import styles from "../CSS/DangNhap.module.css";

export class DangNhapComponent{
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
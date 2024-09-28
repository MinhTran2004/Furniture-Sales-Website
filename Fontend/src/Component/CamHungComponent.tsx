import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../CSS/CamHung.module.css";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export class CamHungComponent{
    static ItemInspiration = ({ image, title, date, contents }: any) => {
        return (
            <div className={styles.item_Inspiration}>
                <img src={image} className={styles.img_Inspiration} alt=""/>
                <div style={{ marginLeft: 20 }}>
                    <p style={{ fontSize: 22, fontWeight: '400', margin: '5px 0' }}>{title}</p>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: 18 }} />
                        <p style={{ fontSize: 16, color: '#889096', margin: 0, marginLeft: 5 }}>{date}</p>
                    </div>

                    <p style={{ fontSize: 17, color: '#889096', fontWeight: '400', margin: '9px 0' }}>{contents}</p>

                    <a href="#doc" style={{ color: 'black', fontSize: 14 }}>Đọc tiếp</a>
                </div>
            </div>
        )
    }

    static ItemNews = ({ image, title }: any) => {
        return (
            <div style={{ display: 'flex', marginBottom: 15 }}>
                <img src={image} className={styles.img_news} alt=""/>
                <p style={{ fontSize: 15, marginLeft: 10, fontWeight: '500' }}>{title}</p>
            </div>
        )
    }

    static ItemPolicies = ({ image, title, desc }: any) => {
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

}
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import styles from '../CSS/DangNhap.module.css';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { UserSevice } from '../../Sevice/UserSevice';
import { UserModel } from '../../Model/UserModel';

export default function DangNhap() {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const LoginLayout = () => {
        const [account, setAccount] = useState('');
        const [password, setPassword] = useState('');

        return (
            <div className={styles.containerInput}>
                <TextField value={account} onChange={(text) => setAccount(text.target.value)} label="Username" className={styles.inputLayout} size={'small'} />
                <TextField value={password} onChange={(text) => setPassword(text.target.value)} label="Password" className={styles.inputLayout} style={{ marginTop: 15 }} size={'small'} />
                <Button style={{ backgroundColor: '#1565c0', color: 'white', marginTop: 20 }}>Đăng nhập</Button>
            </div>
        )
    }

    const RegisterLayout = () => {
        const [account, setAccount] = useState('');
        const [password, setPassword] = useState('');
        const [phone, setPhone] = useState('');

        const btnRegister = async () => {
            try{
                const data = new UserModel(undefined, account, password, phone, undefined);
                await UserSevice.addUser(data);
            }catch(err){
                console.log(err);
            }
        }

        return (
            <div className={styles.containerInput}>
                <TextField value={account} onChange={(text) => setAccount(text.target.value)} label="Username" className={styles.inputLayout} size={'small'} />
                <TextField value={password} onChange={(text) => setPassword(text.target.value)} label="Password" className={styles.inputLayout} style={{ marginTop: 15 }} size={'small'} />
                <TextField value={phone} onChange={(text) => setPhone(text.target.value)} label="Phone" className={styles.inputLayout} style={{ marginTop: 15 }} size={'small'} />
                <Button style={{ backgroundColor: '#1565c0', color: 'white', marginTop: 20 }} onClick={btnRegister}>Đăng kí</Button>
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

            <div className={styles.container}>
                <Box sx={{ width: '100%', typography: 'body1', }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Đăng nhập" value="1" />
                                <Tab label="Đăng kí" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><LoginLayout /></TabPanel>
                        <TabPanel value="2"><RegisterLayout /></TabPanel>
                    </TabContext>
                </Box>
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

                    <div className="item_footer">
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
    );
}

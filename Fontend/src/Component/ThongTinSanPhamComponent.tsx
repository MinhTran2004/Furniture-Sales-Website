import { Link } from "react-router-dom"
import styles from "../CSS/Thongtinsanpham.module.css"
import { FaRegStar } from "react-icons/fa"
import { Product } from "../Model/ProductModel";

export class ThongTinSanPhamComponent{
    static ConvertMoney = (price:String) => {
        const convertMoney = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return convertMoney;
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
    static ItemProduct = (item : Product) => {
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
    static TabDescribe = () => {
        return (
            <div style={{ width: '75%', margin: '0 auto', textAlign: 'justify' }}>
                <p style={{ fontWeight: '500', fontSize: 17 }}>Bữa cơm gia đình là khoảnh khắc sum vầy, gắn kết yêu thương. Hãy biến những khoảnh khắc ấy thêm ấm áp và trọn vẹn. Bộ bàn ăn được thiết kế hiện đại, sang trọng, sử dụng chất liệu cao cấp cùng quy trình sản xuất tiên tiến, mang đến cho gia đình bạn không gian đẳng cấp.</p>
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>Đặc điểm nổi bật</p>
                <ul>
                    <li style={{ fontWeight: 'bold' }}>Thiết kế hiện đại: <span style={{ fontWeight: 'normal' }}>Sở hữu kiểu dáng hiện đại, thanh lịch phù hợp với mọi không gian nội thất. Các đường nét thiết kế tinh tế, gọn gàng tạo nên vẻ đẹp sang trọng và đẳng cấp cho phòng bếp của bạn</span></li>
                    <li style={{ fontWeight: 'bold' }}>Chất liệu cao cấp:</li>
                    <ul>
                        <li style={{ fontWeight: 'bold' }}>Mặt bàn: <span style={{ fontWeight: 'normal' }}> Mặt bàn được làm từ cao cấp, có khả năng chống xước, chống thấm nước, chịu nhiệt tốt và dễ dàng vệ sinh.</span></li>
                        <li style={{ fontWeight: 'bold' }}>Khung bàn: <span style={{ fontWeight: 'normal' }}>Khung bàn được làm chắc chắn, đảm bảo độ bền bỉ theo thời gian.</span></li>
                        <li style={{ fontWeight: 'bold' }}>Ghế: <span style={{ fontWeight: 'normal' }}>Ghế được bọc da cao cấp, mềm mại và êm ái, mang lại cảm giác thoải mái khi ngồi.</span></li>
                    </ul>
                    <li style={{ fontWeight: 'bold' }}>Chế tác tinh xảo: <span style={{ fontWeight: 'normal' }}>Từng chi tiết đều được chế tác một cách tỉ mỉ và tinh xảo, thể hiện sự sang trọng và đẳng cấp của sản phẩm. Các đường may chắc chắn, đều đặn cùng lớp sơn bóng mịn tạo nên vẻ đẹp hoàn hảo cho bộ bàn ăn.</span></li>
                    <li style={{ fontWeight: 'bold' }}>Kích thước đa dạng: <span style={{ fontWeight: 'normal' }}>Có nhiều kích thước khác nhau để bạn lựa chọn, phù hợp với diện tích phòng bếp của bạn.</span></li>
                </ul>
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>Lợi ích: </p>
                <ul>
                    <li>Mang đến sự tiện nghi và thoải mái cho bữa cơm gia đình bạn.</li>
                    <li>Thiết kế hiện đại, sang trọng góp phần tô điểm cho không gian bếp của bạn thêm đẹp mắt và đẳng cấp.</li>
                    <li>Chất liệu cao cấp đảm bảo độ bền đẹp cho sản phẩm theo thời gian.</li>
                    <li>Dễ dàng vệ sinh và bảo quản.</li>
                </ul>
                <p style={{ fontWeight: 'bold', fontSize: 20 }}>Phù hợp cho: </p>
                <ul>
                    <li>Phòng bếp gia đình</li>
                    <li>Căn hộ chung cư</li>
                    <li>Nhà hàng</li>
                    <li>Khách sạn</li>
                    <li>Resort</li>
                </ul>

            </div>
        )
    }
    static TabDeliveryPolicy = () => {
        return (
            <div style={{ width: '75%', margin: '0 auto', textAlign: 'justify' }}>
                <p>Dịch vụ giao hàng tận nơi trên toàn quốc, áp dụng cho khách mua hàng trên website, fanpage và gọi điện thoại, không áp dụng cho khách mua trực tiếp tại cửa hàng.</p>
                <p>Đơn hàng sẽ được chuyển phát đến tận địa chỉ khách hàng cung cấp thông qua công ty vận chuyển trung gian.</p>
                <p style={{ fontWeight: 'bold' }}>Thời gian giao hàng: </p>
                <li>1.Đơn hàng nội và ngoại thành TP.HCM:</li>
                <p>Thời gian giao hàng là 1-2 ngày sau khi đặt hàng. </p>
                <p>Đơn hang trước 11h30 trưa thì sẽ giao trong buổi chiều cùng ngày </p>
                <p>Đơn hàng sau 11h30 sẽ giao trong buổi tối và sáng hôm sau. </p>
                <li>Đơn hàng ở các tỉnh thành khác:</li>
                <p>Thời gian là 2-3 ngày đối với khu vực trung tâm tỉnh thành phố, 3-7 ngày đối với khu vực ngoại thành, huyện, xã, thị trấn… </p>
                <p>(Không tính thứ bảy, chủ nhật hay các ngày lễ tết) </p>
                <p>Thời gian xử lý đơn hàng sẽ được tính từ khi nhận được thanh toán hoàn tất của quý khách. </p>
                <p>Có thể thay đổi thời gian giao hàng nếu khách hàng yêu cầu và EGA Furniture chủ động đổi trong trường hợp chịu ảnh hưởng của thiên tai hoặc các sự kiện đặc biệt khác. </p>
                <p>Đơn hàng của quý khách sẽ được giao tối đa trong 2 lần. Trường hợp lần đầu giao hàng không thành công, sẽ có nhân viên liên hệ để sắp xếp lịch giao hàng lần 2 với quý khách, trong trường hợp vẫn không thể liên lạc lại được hoặc không nhận được bất kì phản hồi nào từ phía quý khách, đơn hàng sẽ không còn hiệu lực. </p>
                <p>Để kiểm tra thông tin hoặc tình trạng đơn hàng của quý khách, xin vui lòng inbox fanpage hoặc gọi số hotline, cung cấp tên, số điện thoại để được kiểm tra. </p>
                <p>Khi hàng được giao đến quý khách, vui lòng ký xác nhận với nhân viên giao hàng và kiểm tra lại số lượng cũng như loại hàng hóa được giao có chính xác không. Xin quý khách vui lòng giữ lại biên lại vận chuyển và hóa đơn mua hàng để đối chiếu kiểm tra. </p>
                <p style={{ fontWeight: 'bold' }}>2.Phí giao hàng</p>
                <li>Phí ship cố định là 30,000đ áp dụng cho mọi khu vực </li>
            </div>
        )
    }
    static TabReturnPolicy = () => {
        return (
            <div style={{ width: '75%', margin: '0 auto' }}>
                <p>EGA - Chính Sách Đổi Trả Tốt Nhất Cho Nội Thất Chất Lượng</p>
                <p>Tại EGA, chúng tôi cam kết đem đến cho khách hàng sự hài lòng tối đa và trải nghiệm mua sắm dễ dàng, đáng tin cậy. Chính vì vậy, chúng tôi tự hào giới thiệu Chính Sách Đổi Trả Tốt Nhất cho các sản phẩm nội thất, bao gồm giường, ghế, bộ phòng ngủ, nội thất phòng khách và nhiều hơn nữa.</p>
                <p>Chúng tôi hiểu rằng việc lựa chọn nội thất phù hợp với không gian sống là một quyết định quan trọng, và có thể đòi hỏi sự cân nhắc kỹ lưỡng. Do đó, chúng tôi mang đến Chính Sách Đổi Trả linh hoạt và tiện lợi, nhằm giúp bạn hoàn toàn yên tâm trong quá trình mua sắm.</p>
                <p>Theo chính sách của chúng tôi, nếu bạn không hoàn toàn hài lòng với sản phẩm đã mua, bạn có thể đổi trả trong vòng 30 ngày kể từ ngày mua hàng. Điều quan trọng là sản phẩm phải còn nguyên vẹn, không bị hỏng hóc và chưa sử dụng. Chúng tôi luôn coi trọng sự đáng tin cậy và uy tín, và cam kết xử lý các yêu cầu đổi trả một cách nhanh chóng và hiệu quả.</p>
                <p>Để thực hiện quyền đổi trả, bạn chỉ cần liên hệ với đội ngũ hỗ trợ khách hàng của chúng tôi thông qua điện thoại hoặc email. Chúng tôi sẽ hỗ trợ bạn trong việc đăng ký yêu cầu đổi trả và cung cấp hướng dẫn chi tiết về quy trình.</p>
                <p>Không chỉ giới hạn đối với việc đổi trả, chúng tôi cũng cam kết hỗ trợ sửa chữa và bảo hành cho các sản phẩm nội thất của chúng tôi. Nếu có bất kỳ vấn đề gì liên quan đến chất lượng hoặc hư hỏng của sản phẩm, xin vui lòng liên hệ với chúng tôi. Đội ngũ kỹ thuật viên giàu kinh nghiệm sẽ nhanh chóng tới để kiểm tra và sửa chữa sản phẩm của bạn.</p>
                <p>EGA luôn hướng tới sự hài lòng và niềm tin tuyệt đối của khách hàng. Chúng tôi xây dựng Chính Sách Đổi Trả Tốt Nhất không chỉ để tạo điều kiện thuận lợi cho bạn mua sắm, mà còn là cách thể hiện lòng tri ân đối với sự tin tưởng mà bạn đã dành cho chúng tôi.</p>
                <p>Hãy để EGA đồng hành cùng bạn trong việc trang trí không gian sống và mang đến cho bạn những trải nghiệm thú vị cùng với những sản phẩm nội thất tinh tế và chất lượng.</p>
            </div>
        )
    }

}
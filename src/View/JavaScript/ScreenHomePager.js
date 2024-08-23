import { ProgressBar } from "react-bootstrap"

export default function ScreenHomePager() {
    const ItemSeasonColl = ({ img, nameRoom, quantity }) => {
        return (
            <div>
                <img src={img} alt="" />
                <p style={{ textAlign: 'center', margin: 0, fontSize: 20, fontWeight: 500 }}>{nameRoom}</p>
                <p style={{ textAlign: 'center', margin: 0, fontSize: 14, fontWeight: 500, color: '#888' }}>{quantity} sản phẩm</p>
            </div>
        )
    }
    const ItemCoupon = ({ title, desc, code, date }) => {
        return (
            <div style={{ display: 'flex', width: 500, height: 105 }}>

                <div style={{ width: 95, display: 'flex', justifyContent: 'center', alignItems: 'center', borderLeftStyle: "solid", borderLeftColor: '#ec720e', borderWidth: 8, borderRadius: 10, boxShadow: '0px 0px 2px 0px' }}>
                    <img src={require("../Image/coupon.webp")} style={{ width: 90, height: 90, padding: 10 }} alt="" />
                </div>

                <div style={{ width: 260, borderStyle: 'solid', borderWidth: 0, borderRadius: 10, boxShadow: '0px 0px 2px 0px', padding: '10px 10px 0px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <p style={{ margin: 0, fontWeight: '500', fontSize: 15 }}>{title}</p>
                            <p style={{ margin: 0, fontSize: 13, color: '#888888' }}>{desc}</p>
                        </div>
                        <img src={require('../Image/info.png')} style={{ width: 20, height: 20 }} alt="" />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p style={{ margin: 0, color: '#888888', fontSize: 13 }}>Mã: </p>
                                <p style={{ margin: 0, fontWeight: '500', fontSize: 13 }}>{code}</p>
                            </div>
                            <p style={{ margin: 0, color: '#888888', fontSize: 13 }}>HSD: {date}</p>
                        </div>

                        {title === "FREESHIP" ?
                            (<button style={{ backgroundColor: '#ff7d0f', padding: '4px 8px', border: 0, borderRadius: 5, color: 'white', fontSize: 11, fontWeight: '500' }}>Sao chép</button>)
                            :
                            (<img src={require('../Image/outdated.webp')} alt="" />)
                        }
                    </div>
                </div>

            </div>
        )
    }
    const ItemFlashSale = ({ image, name, sale, price, label, quantity }) => {
        return (
            <div style={{ width: '25%', height: '100%', padding: '0 10px', justifyContent: 'space-around' }}>

                <div style={{ height: 280, padding: 10, display: 'flex', justifyContent: 'center', objectFit: 'cover', objectPosition: 'center' }}>
                    <img src={image} alt="" style={{ width: '100%' }} />
                </div>
                <p style={{ margin: 0, height: 50, fontWeight: '630', fontSize: 18 }}>{name}</p>
                <div>
                    <i class="fa-regular fa-star" style={{ color: '#FFD43B' }} />
                    <i class="fa-regular fa-star" style={{ color: '#FFD43B' }} />
                    <i class="fa-regular fa-star" style={{ color: '#FFD43B' }} />
                    <i class="fa-regular fa-star" style={{ color: '#FFD43B' }} />
                    <i class="fa-regular fa-star" style={{ color: '#FFD43B' }} />
                </div>
                <p style={{ margin: 0, color: 'red', fontWeight: 'bold', fontSize: 18 }}>{sale}</p>
                <div style={{ display: 'flex' }}>
                    <p style={{ margin: 0, textDecoration: 'line-through', fontSize: 18 }}>{price}</p>
                    <p style={{ margin: '0 10px', alignSelf: 'center', fontSize: 13, backgroundColor: '#e9330d', borderRadius: 20, color: 'white', padding: '1px 5px' }}>-{label}%</p>
                </div>

                {Number(quantity) > 80 ?
                    <div style={{ display: 'flex', alignSelf: 'center', marginTop: 5 }}>
                        <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/fire-icon.svg?1723020948426" alt="" style={{ width: 21, height: 24 }} />
                        <p style={{ margin: 0, fontWeight: '500', marginLeft: 10, fontSize: 15 }}>Sắp cháy hàng</p>
                    </div>
                    :
                    <p style={{ margin: 0, fontWeight: '500', fontSize: 15, marginTop: 5 }}>Đã bán {quantity} sản phẩm</p>
                }
                <ProgressBar variant="info" style={{ height: 8, marginTop: 5, backgroundColor: '#bcb5ad' }} now={quantity} />

            </div>
        )
    }
    const ItemLookbook = ({ image, title, info }) => {
        return (
            <div style={{ width: '33%', textAlign: 'center', padding: '0 10px' }}>
                <img src={image} alt="" style={{ width: '100%' }} />
                <p style={{ fontSize: 25, fontWeight: 400, margin: 0 }}>{title}</p>
                <a href="#pb" style={{ color: 'black', fontWeight: 400 }}>{info}</a>
            </div>
        )
    }
    const ItemArrival = ({ image, name, sale, price, label }) => {
        return (
            <div style={{ width: '25%', height: '100%', padding: '0 10px', justifyContent: 'space-around' }}>

                <div style={{ height: 280, padding: 10, display: 'flex', justifyContent: 'center', objectFit: 'cover', objectPosition: 'center' }}>
                    <img src={image} alt="" style={{ width: '100%' }} />
                </div>
                <p style={{ margin: 0, height: 50, fontWeight: '630', fontSize: 18 }}>{name}</p>
                <div>
                    <i class="fa-regular fa-star" style={{ color: '#FFD43B' }} />
                    <i class="fa-regular fa-star" style={{ color: '#FFD43B' }} />
                    <i class="fa-regular fa-star" style={{ color: '#FFD43B' }} />
                    <i class="fa-regular fa-star" style={{ color: '#FFD43B' }} />
                    <i class="fa-regular fa-star" style={{ color: '#FFD43B' }} />
                </div>
                <p style={{ margin: 0, color: 'red', fontWeight: 'bold', fontSize: 18 }}>{sale}</p>
                <div style={{ display: 'flex' }}>
                    <p style={{ margin: 0, textDecoration: 'line-through', fontSize: 18 }}>{price}</p>
                    <p style={{ margin: '0 10px', alignSelf: 'center', fontSize: 13, backgroundColor: '#e9330d', borderRadius: 20, color: 'white', padding: '1px 5px' }}>-{label}%</p>
                </div>

            </div>
        )
    }
    const ItemYoutube = ({ image }) => {
        return (
            <div style={{ width: '25%', position: 'relative' }}>
                <a href="#a">
                    <img src={image} alt="" style={{ width: '100%', padding: 10 }} />
                    <i class="fa-solid fa-play" style={{ position: 'absolute', top: '50%', left: '45%', color: '#babbbd', backgroundColor: 'white', padding: '12px 15px', borderRadius: '100%', opacity: 0.5 }} />
                </a>
            </div>
        )
    }
    const ItemInstagram = ({ image }) => {
        return (
            <div style={{ width: '20%' }}>
                <img src={image} alt="" style={{ width: '100%', padding: 5 }} />
            </div>
        )
    }
    const ItemInspiration = ({ image, title, date, contents }) => {
        return (
            <div style={{ width: '25%', padding: 10 }}>
                <img src={image} alt="" style={{ width: '100%' }} />
                <p style={{ fontSize: 19, fontWeight: '500', margin: '5px 0' }}>{title}</p>

                <div style={{ display: 'flex' }}>
                    <i class="fa-regular fa-calendar-days" style={{ fontSize: 18, color: '#6c757d' }} />
                    <p style={{ fontSize: 15, color: '#6c757d', margin: 0, marginLeft: 5 }}>{date}</p>
                </div>

                <p style={{ fontSize: 14, margin: '9px 0' }}>{contents}</p>

                <a href="#doc" style={{ color: 'black', fontSize: 14 }}>Đọc tiếp</a>
            </div>
        )
    }
    const ItemPolicies = ({ icon, title, desc }) => {
        return (
            <div style={{ width: '25%', display: 'flex', alignItems: 'center', padding: '20px 0' }}>
                <i class={icon} style={{ color: '#ffffff', fontSize: 30 }} />
                <div>
                    <p style={{ margin: '0px 10px', fontSize: 15, color: 'white', fontWeight: '500' }}>{title}</p>
                    <p style={{ margin: '0px 10px', fontSize: 15, color: 'white' }}>{desc}</p>
                </div>
            </div>
        )
    }

    return (
        <div style={{ flex: 1 }}>
            {/* header */}
            <div style={{ height: 60, display: 'flex', justifyContent:'center' }}>

                <div style={{ width: '85%', height: 60, backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed' }}>
                    <div>
                        <img src={require("../Image/image_logo_home.png")} style={{ Width: 134, height: 40 }} alt="" />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <a href="/a" style={{ textDecoration: 'none', paddingLeft: 50, color: 'black', fontSize: 17, fontWeight: "500" }}>Sản phẩm</a>
                        <a href="/b" style={{ textDecoration: 'none', paddingLeft: 50, color: 'black', fontSize: 17, fontWeight: "500" }}>Phòng</a>
                        <a href="/c" style={{ textDecoration: 'none', paddingLeft: 50, color: 'black', fontSize: 17, fontWeight: "500" }}>Khuyến mãi</a>
                        <a href="/d" style={{ textDecoration: 'none', paddingLeft: 50, color: 'black', fontSize: 17, fontWeight: "500" }}>Góc cảm hứng</a>
                        <a href="/e" style={{ textDecoration: 'none', paddingLeft: 50, color: 'black', fontSize: 17, fontWeight: "500" }}>Hướng dẫn thiết lập</a>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={require("../Image/sreach.png")} alt="" style={{ width: 25, height: 25, marginRight: 15 }} />
                        <img src={require("../Image/user.png")} alt="" style={{ width: 25, height: 25, marginRight: 15 }} />
                        <img src={require("../Image/cart.png")} alt="" style={{ width: 25, height: 25, marginRight: 15 }} />
                    </div>

                </div>

            </div>
            <img src={require("../Image/slider_1.webp")} alt="" style={{ width: '100%' }} />

            {/* main */}
            <div style={{ width: "85%", margin: "auto" }}>
                <p style={{ textAlign: 'center', margin: '30px 0', fontSize: 35, fontWeight: 500 }}>Danh mục sản phẩm</p>

                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ItemSeasonColl img={require('../Image/season_coll_1_img.webp')} nameRoom={"Phòng khách"} quantity={"11"} />
                        <ItemSeasonColl img={require('../Image/season_coll_2_img.webp')} nameRoom={"Phòng ngủ"} quantity={"8"} />
                        <ItemSeasonColl img={require('../Image/season_coll_3_img.webp')} nameRoom={"Nhà bếp"} quantity={"8"} />
                        <ItemSeasonColl img={require('../Image/season_coll_4_img.webp')} nameRoom={"Phòng làm việc"} quantity={"9"} />
                        <ItemSeasonColl img={require('../Image/season_coll_5_img.webp')} nameRoom={"Dèn trang trí"} quantity={"2"} />
                        <ItemSeasonColl img={require('../Image/season_coll_6_img.webp')} nameRoom={"Kệ lưu giữ"} quantity={"11"} />
                    </div>

                    <div style={{ marginTop: 100, display: 'flex', justifyContent: 'space-between' }}>
                        <ItemCoupon title={"FREESHIP"} desc={"Freeship cho đơn hàng từ 500k"} code={"EGAFREESHIP"} date={"30/12/2024"} />
                        <ItemCoupon title={"GIẢM 50K"} desc={"Freeship cho đơn hàng từ 600k"} code={"GIAM50K"} date={"06/07/2024"} />
                        <ItemCoupon title={"GIẢM 30%"} desc={"Cho các sản phẩm trong Nội thất"} code={"GIAM30"} date={"09/06/2024"} />
                        <ItemCoupon title={"GIẢM 40%"} desc={"Có hiệu lực khi mua 4 sản phẩm"} code={"GIAM40"} date={"20/06/2024"} />
                    </div>
                </div>

                <h1 style={{ margin: '60px 0' }}>HAPPY SUMMER - GIẢM ĐẾN 50%</h1>

                <div style={{ display: 'flex' }}>
                    <ItemFlashSale name={'Sofa Băng Phòng Khách Truyền Thống QP115'} price={'31.200.000$'} sale={'62.400.000$'} label={50} quantity={28} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/budwingmelaniecanape3placesgir.jpg?v=1721288299183'} />
                    <ItemFlashSale name={'Sofa Băng Bọc Vải Siêu Rộng Lewis Extra QP243'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={46} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/rectangle2b82fc8df70254ff7ba5f.jpg?v=1721288309203'} />
                    <ItemFlashSale name={'Sofa Băng Bọc Vải Phong Cách Scandinavian'} price={'33.750.000₫'} sale={'67.500.000₫'} label={50} quantity={96} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/951481666x12496f7cdf2128e24243.jpg?v=1721288302580'} />
                    <ItemFlashSale name={'Sofa Băng Phòng Khách Truyền Thống QP113'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={87} image={'https://bizweb.dktcdn.net/thumb/grande/100/491/756/products/anhsanphamd7d53ac32ef245df9fb3.jpg?v=1721288299183'} />
                </div>
                <div style={{ display: 'flex' }}>
                    <ItemFlashSale name={'Sofa Băng Phòng Khách Truyền Thống QP115'} price={'31.200.000$'} sale={'62.400.000$'} label={50} quantity={14} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/budwingmelaniecanape3placesgir.jpg?v=1721288299183'} />
                    <ItemFlashSale name={'Sofa Băng Bọc Vải Siêu Rộng Lewis Extra QP243'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={96} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/rectangle2b82fc8df70254ff7ba5f.jpg?v=1721288309203'} />
                    <ItemFlashSale name={'Sofa Băng Bọc Vải Phong Cách Scandinavian'} price={'33.750.000₫'} sale={'67.500.000₫'} label={50} quantity={61} image={'https://bizweb.dktcdn.net/thumb/1024x1024/100/491/756/products/951481666x12496f7cdf2128e24243.jpg?v=1721288302580'} />
                    <ItemFlashSale name={'Sofa Băng Phòng Khách Truyền Thống QP113'} price={'31.200.000₫'} sale={'62.400.000₫'} label={50} quantity={99} image={'https://bizweb.dktcdn.net/thumb/grande/100/491/756/products/anhsanphamd7d53ac32ef245df9fb3.jpg?v=1721288299183'} />
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                    <button style={{ color: '#ec720e', borderWidth: 1, borderColor: '#ec720e', borderStyle: 'solid', borderRadius: 8, padding: '5px 15px', backgroundColor: 'white' }}>Xem tất cả <i class="fa-solid fa-chevron-right" style={{ color: '#ec720e' }} /> </button>
                </div>

            </div>

            {/* main 2 */}
            <div style={{ width: '85%', margin: '50px auto 0' }}>
                <h2 style={{ textAlign: 'center' }}>Chứng nhận về chúng tôi</h2>
                <div>
                    <img src={require('../Image/brand_1.webp')} alt="" style={{ width: '25%' }} />
                    <img src={require('../Image/brand_2.webp')} alt="" style={{ width: '25%' }} />
                    <img src={require('../Image/brand_3.webp')} alt="" style={{ width: '25%' }} />
                    <img src={require('../Image/brand_4.webp')} alt="" style={{ width: '25%' }} />
                </div>
                <div style={{ textAlign: 'center', backgroundColor: '#ffebd4', marginTop: 60 }}>
                    <img src={require('../Image/lookbook_oneproduct_img.webp')} alt="" style={{ width: '100%' }} />

                    <div style={{ width: 600, margin: '10px auto' }}>
                        <h3>PHÒNG NGỦ HẠNH PHÚC</h3>
                        <p style={{ margin: 0 }}>Đắm mình trong chiếc giường trang trí với bộ khăn trải giường sang trọng, sự kết hợp giữa chất liệu vải xa hoa và đồ nội thất được sắp xếp hợp lý để tạo nên một thiên đường ngủ xa hoa. Lấy cảm hứng và biến nhạt nhẽo thành hạnh phúc.</p>
                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: ' 0 0 20px' }}>
                        <button style={{ color: '#ec720e', borderWidth: 1, borderColor: '#ec720e', borderStyle: 'solid', borderRadius: 5, padding: '5px 15px', backgroundColor: '#ffebd4' }}>Xem chi tiết</button>
                    </div>
                </div>

                <h2 style={{ textAlign: 'center', margin: '50px 0' }}>BST NỘI THẤT DÀNH CHO BẠN</h2>

                <div style={{ display: 'flex' }}>
                    <ItemLookbook image={require('../Image/lookbook_1_image.webp')} title={'BST Phòng Bếp'} info={'Xem chi tiết'} />
                    <ItemLookbook image={require('../Image/lookbook_2_image.webp')} title={'BST Phòng Bếp'} info={'Xem chi tiết'} />
                    <ItemLookbook image={require('../Image/lookbook_3_image.webp')} title={'BST Phòng Bếp'} info={'Xem chi tiết'} />
                </div>

                <div style={{ marginTop: 50 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4>NEW ARRIVAL</h4>
                            <h2>NỘI THẤT HIỆN ĐẠI</h2>
                        </div>
                        <a href="#hiendai" style={{ fontSize: 18, color: 'black' }}>Xem tất cả</a>
                    </div>

                    <div>
                        <div style={{ display: 'flex', marginTop: 30 }}>
                            <ItemArrival name={'Đèn tường Studio'} sale={'5.800.000₫'} price={'8.900.000₫'} label={'35'} image={require('../Image/arrival_1.webp')} />
                            <ItemArrival name={'Đèn tường Wally'} sale={'5.500.000₫'} price={'8.900.000₫'} label={'39'} image={require('../Image/arrival_2.webp')} />
                            <ItemArrival name={'Mochi Pouffe / Nhiều màu'} sale={'7.290.000₫'} price={'8.300.000₫'} label={'13'} image={require('../Image/arrival_3.webp')} />
                            <ItemArrival name={'Bàn Cà Phê Raw Đá Cẩm Thạch Đen'} sale={'12.250.000₫'} price={'16.500.000'} label={'26'} image={require('../Image/arrival_4.webp')} />
                        </div>
                        <div style={{ display: 'flex', marginTop: 30 }}>
                            <ItemArrival name={'Đèn tường Studio'} sale={'5.800.000₫'} price={'8.900.000₫'} label={'35'} image={require('../Image/arrival_1.webp')} />
                            <ItemArrival name={'Đèn tường Wally'} sale={'5.500.000₫'} price={'8.900.000₫'} label={'39'} image={require('../Image/arrival_2.webp')} />
                            <ItemArrival name={'Mochi Pouffe / Nhiều màu'} sale={'7.290.000₫'} price={'8.300.000₫'} label={'13'} image={require('../Image/arrival_3.webp')} />
                            <ItemArrival name={'Bàn Cà Phê Raw Đá Cẩm Thạch Đen'} sale={'12.250.000₫'} price={'16.500.000'} label={'26'} image={require('../Image/arrival_4.webp')} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
                    <img src={require('../Image/img_story.webp')} alt="" style={{ width: 480, height: 730 }} />
                    <div style={{ width: 500, marginLeft: 50 }} >
                        <h3>Một chút câu chuyện</h3>
                        <p>Với ước mơ tạo ra thứ gì đó đặc biệt, EGA Furniture đã thành lập vào năm 2010. Tầm nhìn không chỉ là tạo ra những sản phẩm mang lại niềm vui cho thế giới những người yêu thích thiết kế nội thất mà họ còn muốn tạo ra một nền văn hóa công ty nơi nhân viên cảm thấy thoải mái. Vì vậy, từ khóa hạnh phúc đã ăn sâu vào DNA thương hiệu của chúng tôi.</p>
                        <p style={{ fontWeight: 'bold' }}>Hạnh phúc là ở xung quanh bạn những người tốt và những sản phẩm mang lại niềm vui.</p>
                        <a href="#story" style={{ color: 'black' }}>Xem chi tiết <i class="fa-solid fa-chevron-right" style={{ color: 'black', fontSize: 14 }} /></a>
                    </div>
                </div>

                <img src={require('../Image/slide_3.webp')} alt="" style={{ width: '100%', marginTop: 60 }} />

                <div style={{ marginTop: 50 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4>Ưu đãi</h4>
                            <h2>NỘI THẤT PHÒNG BẾP</h2>
                        </div>
                        <a href="#hiendai" style={{ fontSize: 18, color: 'black' }}>Xem tất cả</a>
                    </div>

                    <div>
                        <div style={{ display: 'flex', marginTop: 30 }}>
                            <ItemArrival name={'Đèn tường Studio'} sale={'5.800.000₫'} price={'8.900.000₫'} label={'35'} image={require('../Image/arrival_1.webp')} />
                            <ItemArrival name={'Đèn tường Wally'} sale={'5.500.000₫'} price={'8.900.000₫'} label={'39'} image={require('../Image/arrival_2.webp')} />
                            <ItemArrival name={'Mochi Pouffe / Nhiều màu'} sale={'7.290.000₫'} price={'8.300.000₫'} label={'13'} image={require('../Image/arrival_3.webp')} />
                            <ItemArrival name={'Bàn Cà Phê Raw Đá Cẩm Thạch Đen'} sale={'12.250.000₫'} price={'16.500.000'} label={'26'} image={require('../Image/arrival_4.webp')} />
                        </div>
                        <div style={{ display: 'flex', marginTop: 30 }}>
                            <ItemArrival name={'Đèn tường Studio'} sale={'5.800.000₫'} price={'8.900.000₫'} label={'35'} image={require('../Image/arrival_1.webp')} />
                            <ItemArrival name={'Đèn tường Wally'} sale={'5.500.000₫'} price={'8.900.000₫'} label={'39'} image={require('../Image/arrival_2.webp')} />
                            <ItemArrival name={'Mochi Pouffe / Nhiều màu'} sale={'7.290.000₫'} price={'8.300.000₫'} label={'13'} image={require('../Image/arrival_3.webp')} />
                            <ItemArrival name={'Bàn Cà Phê Raw Đá Cẩm Thạch Đen'} sale={'12.250.000₫'} price={'16.500.000'} label={'26'} image={require('../Image/arrival_4.webp')} />
                        </div>
                    </div>
                </div>

            </div>

            {/* main 3 */}
            <div style={{ width: '85%', margin: '50px auto' }}>

                <h2 style={{ textAlign: 'center' }}>VIDEO ĐƯỢC XEM NHIỀU NHẤT</h2>

                <div style={{ margin: '30px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <ItemYoutube image={require('../Image/video_1_img.webp')} />
                    <ItemYoutube image={require('../Image/video_2_img.webp')} />
                    <ItemYoutube image={require('../Image/video_3_img.webp')} />
                    <ItemYoutube image={require('../Image/video_4_img.webp')} />
                </div>

                <h2 style={{ textAlign: 'center' }}>@ FOLLOW INSTAGRAM</h2>

                <div style={{ display: 'flex', marginTop: 20 }}>
                    <ItemInstagram image={require('../Image/insta_1_img.webp')} />
                    <ItemInstagram image={require('../Image/insta_2_img.webp')} />
                    <ItemInstagram image={require('../Image/insta_3_img.webp')} />
                    <ItemInstagram image={require('../Image/insta_4_img.webp')} />
                    <ItemInstagram image={require('../Image/insta_5_img.webp')} />
                </div>

                <div style={{ position: 'relative', marginTop: 50 }}>
                    <a href="#a">
                        <img src={require('../Image/video_5_img.webp')} alt="" style={{ width: '100%' }} />
                        <i class="fa-solid fa-play" style={{ position: 'absolute', top: '50%', left: '50%', color: '#babbbd', backgroundColor: 'white', padding: '20px 25px', fontSize: 25, borderRadius: '100%' }} />
                    </a>
                </div>

                <h2 style={{ margin: '40px 0 30px' }}>GÓC CẢM HỨNG</h2>

                <div style={{ display: 'flex' }}>
                    <ItemInspiration image={require('../Image/inspiration_1.webp')} title={'Cách trang trí cầu thang gỗ'} date={'Thứ Năm,27/07/2023'} contents={'Trang trí cầu thang là một phần quan trọng trong nội thất của một ngôi nhà của bạn. Xu hướng sử dụng...'} />
                    <ItemInspiration image={require('../Image/inspiration_2.webp')} title={'Vợ chồng và cách chọn giường ngủ'} date={'Thứ Năm,27/07/2023'} contents={'Cuộc sống vợ chồng rất quan trọng về vấn đề hòa hợp, bởi vậy trước khi cưới thường có tục...'} />
                    <ItemInspiration image={require('../Image/inspiration_3.webp')} title={'Sofa gia đình - bài trí sao cho hợp phong thủy?'} date={'Thứ Năm,27/07/2023'} contents={'Việc bố trí sofa đúng cách không chỉ mang lại vẻ đẹp cho căn phòng mà còn mang lại may...'} />
                    <ItemInspiration image={require('../Image/inspiration_4.webp')} title={'Sofa góc và bí quyết tăng tài lộc cho ngôi nhà của bạn'} date={'Thứ Năm,27/07/2023'} contents={'Bí quyết nào tăng tài lộc cho ngôi nhà với Sofa góc cổ điển? Việc tìm được một vị trí để...'} />
                </div>
            </div>

            {/* footer */}
            <div>
                <div style={{ padding: '0 7.3%', backgroundColor: '#ec720e' }}>
                    <div style={{ display: 'flex' }}>
                        <ItemPolicies icon={'fa-regular fa-comment-dots fa-flip-horizontal'} title={'Hotline: 19001993'} desc={'Dịch vụ hỗ trợ bạn 24/7'} />
                        <ItemPolicies icon={'fa-solid fa-box'} title={'Quà tặng hấp dẫn'} desc={'Nhiều ưu đãi khuyến mãi hot'} />
                        <ItemPolicies icon={'fa-solid fa-rotate-left fa-flip-vertical'} title={'Đổi trả miễn phí'} desc={'Trong vòng 7 ngày'} />
                        <ItemPolicies icon={'fa-regular fa-dollar-sign'} title={'Giá luôn tốt nhất'} desc={'Hoàn tiền nếu nơi khác rẻ hơn'} />
                    </div>
                </div>

                <div style={{ backgroundColor: '#292929' }}>

                    <div style={{ width: '87%', margin: 'auto', padding: '80px 0', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '25%', padding: '0 20px' }}>
                            <img src={require('../Image/image_logo_home_2.webp')} alt="" style={{ width: '50%', padding: '0 0 10px' }} />
                            <h3 style={{ color: 'white' }}>Siêu thị nội thất EGA</h3>
                            <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}>Thương hiệu nội thất uy tín và chất lượng, cam kết mang đến những trải nghiệm mua sắm tiện lợi, hiện đại và phong phú</p>
                            <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}>Mã số thuế: 12345678999</p>
                            <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}><i class="fa-solid fa-location-dot" style={{ color: 'white' }} /> Địa chỉ: 70 Lu Gia, District 11, Ho Chi Minh City</p>
                            <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}><i class="fa-solid fa-phone" style={{ color: 'white' }} /> Số điện thoại: 19006750</p>
                            <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}><i class="fa-regular fa-envelope" /> support@sapo.vn</p>
                            <p style={{ color: 'white', margin: '10px 0 0', fontSize: 14 }}>© Bản quyền thuộc về EGANY| Cung cấp bởi </p>
                        </div>

                        <div style={{ width: '25%' }}>
                            <h5 style={{ color: 'white', marginBottom: 20 }}>Hỗ trợ khách hàng</h5>
                            <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Giới thiệu</p>
                            <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Thông tin liên hệ</p>
                            <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Tra cứu cửa hàng</p>
                            <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Tư vấn nội thất theo phong thủy</p>
                        </div>

                        <div style={{ width: '25%' }}>
                            <h5 style={{ color: 'white' }}>Chính sách</h5>
                            <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Điều khoản dịch vụ</p>
                            <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Chính sách bảo mật</p>
                            <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Chính sách đổi trả</p>
                            <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Chính sách giao hàng</p>
                            <p style={{ color: 'white', margin: '5px 0 0', fontSize: 14 }}>Chương trình cộng tác viên</p>

                            <img src="https://bizweb.dktcdn.net/100/491/756/themes/956460/assets/footer_trustbadge.png?1723020948426" alt="" style={{ marginTop: 50 }} />
                        </div>

                        <div style={{ width: '25%' }}>
                            <h5 style={{ color: 'white' }}>ĐĂNG KÝ NHẬN TIN</h5>
                            <p style={{ color: 'white', fontSize: 14 }}>Bạn muốn nhận được khuyến mãi đặc biệt? Đăng kí ngay</p>

                            <div style={{ position: 'relative' }}>
                                <input placeholder="Nhập địa chỉ Email" style={{ width: '100%', padding: '8px 20px 8px 10px', borderRadius: 20, fontSize: 14 }} />
                                <button style={{ padding: '3px 10px', borderRadius: 20, backgroundColor: '#292929', color: 'white', position: 'absolute', top: '11%', right: 5, fontSize: 15 }}>Đăng kí</button>
                            </div>
                            <img src={require('../Image/footer_img.png')} alt="" style={{ marginTop: 30 }} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
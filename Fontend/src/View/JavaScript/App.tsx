import { Link, Route, Routes } from "react-router-dom";
import TrangChu from "./TrangChu";
import SanPham from "./SanPham";
import KhuyenMai from "./KhuyenMai";
import CamHung from "./CamHung";
import ThongTinSanPham from "./ThongTinSanPham";
import GioHang from "./GioHang";
import '../CSS/App.css'
import { Dropdown } from "react-bootstrap";
import { HiMenuAlt1 } from "react-icons/hi";

export default function App() {
    return (
        <div>

            <div className="headerContainer">
                <Dropdown className="dropdown">
                    <Dropdown.Toggle id="dropdown-basic">
                        <HiMenuAlt1 />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item><Link to="/" className="headerTitle">Trang chủ</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/Product" className="headerTitle">Sản phẩm</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/Promotion" className="headerTitle">Khuyến mãi</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/Inspirational" className="headerTitle">Góc cảm hứng</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/e" className="headerTitle">Hướng dẫn thiết lập</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
                <img src={require("../Image/image_logo_home.png")} alt="" className="headerLogo" />
                <div className="containerTitle">
                    <Link to="/" className="headerTitle">Trang chủ</Link>
                    <Link to="/Product" className="headerTitle">Sản phẩm</Link>
                    <Link to="/Promotion" className="headerTitle">Khuyến mãi</Link>
                    <Link to="/Inspirational" className="headerTitle">Góc cảm hứng</Link>
                    <Link to="/e" className="headerTitle">Hướng dẫn thiết lập</Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={require("../Image/sreach.png")} alt="" className="headerIcon" />
                    <img src={require("../Image/user.png")} alt="" className="headerIcon" />
                    <img src={require("../Image/cart.png")} alt="" className="headerIcon" />
                    {/* <Link to={'/Cart'}><img src={require("../Image/cart.png")} alt="" className="headerIcon" /></Link> */}
                </div>
            </div>

            <Routes>
                <Route path="/" element={<TrangChu />} />
                <Route path="Product" element={<SanPham />} />
                <Route path="Promotion" element={<KhuyenMai />} />
                <Route path="/Inspirational" element={<CamHung />} />
                <Route path="/InforProduct" element={<ThongTinSanPham />} />
                <Route path="/Cart" element={<GioHang />} />
            </Routes>

        </div>
    )
}
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
import DangNhap from "./DangNhap";

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
                        <Dropdown.Item><Link to="/SanPham" className="headerTitle">Sản phẩm</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/KhuyenMai" className="headerTitle">Khuyến mãi</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/CamHung" className="headerTitle">Góc cảm hứng</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/e" className="headerTitle">Hướng dẫn thiết lập</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
                <img src={require("../Image/image_logo_home.png")} alt="" className="headerLogo" />
                <div className="containerTitle">
                    <Link to="/" className="headerTitle">Trang chủ</Link>
                    <Link to="/SanPham" className="headerTitle">Sản phẩm</Link>
                    <Link to="/KhuyenMai" className="headerTitle">Khuyến mãi</Link>
                    <Link to="/CamHung" className="headerTitle">Góc cảm hứng</Link>
                    <Link to="/e" className="headerTitle">Hướng dẫn thiết lập</Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={require("../Image/sreach.png")} alt="" className="headerIcon" />
                    <Link to="/DangNhap"><img src={require("../Image/user.png")} alt="" className="headerIcon" /></Link>
                    <Link to={'/GioHang'}><img src={require("../Image/cart.png")} alt="" className="headerIcon" /></Link>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<TrangChu />} />
                <Route path="SanPham" element={<SanPham />} />
                <Route path="KhuyenMai" element={<KhuyenMai />} />
                <Route path="/CamHung" element={<CamHung />} />
                <Route path="/ThongTinSanPham" element={<ThongTinSanPham />} />
                <Route path="/GioHang" element={<GioHang />} />
                <Route path="/DangNhap" element={<DangNhap />} />
            </Routes>

        </div>
    )
}
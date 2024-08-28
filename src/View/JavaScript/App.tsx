import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import PromotionPage from "./PromotionPage";
import InspirationalPage from "./InspirationalPage";
import InforProductPage from "./InforProductPage";

export default function App() {
    return (
        <div>
            <div style={{ width: '100%', padding: '0 7%', height: 60, backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', zIndex: 100 }}>
                <div>
                    <img src={require("../Image/image_logo_home.png")} style={{ width: 134, height: 40 }} alt="" />
                </div>
                <div style={{ display: 'flex' }}>
                    <Link to="/" style={{ textDecoration: 'none', paddingLeft: 50, color: 'black', fontSize: 17, fontWeight: "500" }}>Trang chủ</Link>
                    <Link to="/Product" style={{ textDecoration: 'none', paddingLeft: 50, color: 'black', fontSize: 17, fontWeight: "500" }}>Sản phẩm</Link>
                    <Link to="/Promotion" style={{ textDecoration: 'none', paddingLeft: 50, color: 'black', fontSize: 17, fontWeight: "500" }}>Khuyến mãi</Link>
                    <Link to="/Inspirational" style={{ textDecoration: 'none', paddingLeft: 50, color: 'black', fontSize: 17, fontWeight: "500" }}>Góc cảm hứng</Link>
                    <Link to="/e" style={{ textDecoration: 'none', paddingLeft: 50, color: 'black', fontSize: 17, fontWeight: "500" }}>Hướng dẫn thiết lập</Link>
                </div>
                <div style={{ display: 'flex' }}>
                    <img src={require("../Image/sreach.png")} alt="" style={{ width: 25, height: 25, marginRight: 15 }} />
                    <img src={require("../Image/user.png")} alt="" style={{ width: 25, height: 25, marginRight: 15 }} />
                    <img src={require("../Image/cart.png")} alt="" style={{ width: 25, height: 25, marginRight: 15 }} />
                </div>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="Product" element={<ProductPage />} />
                <Route path="Promotion" element={<PromotionPage />} />
                <Route path="/Inspirational" element={<InspirationalPage />} />
                <Route path="/InforProduct" element={<InforProductPage />} />
            </Routes>
            
        </div>
    )
}
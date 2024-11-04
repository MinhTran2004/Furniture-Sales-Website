import { useEffect, useRef, useState } from "react";
import { ProductSevice } from "../../Sevice/ProductSevice";
import { imageProduct, Product } from "../../Model/ProductModel";

const KhuyenMaiProduct = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState<imageProduct[]>([]);
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState('');
    const [label, setLabel] = useState('');
    const [quantity, setQuantity] = useState('');
    const [type, setType] = useState('');
    //Màn hình Khuyễn mại
    const limitPromotion = useRef(12);
    const [dataProductPromotion, setDataProductPromotion] = useState<Product[]>([])

    const getAllProductBySize = async () => {
        const reponse = await ProductSevice.getAllProductBySize(limitPromotion.current - 12, limitPromotion.current)
        setDataProductPromotion(reponse);
    }

    useEffect(() => {
        getAllProductBySize();
    }, [])

    return {
        id, name, image, price, sale, label, quantity, type,
        setId, setName, setImage, setPrice, setSale, setLabel, setQuantity, setType,
        dataProductPromotion, getAllProductBySize
    }
}

export default KhuyenMaiProduct;
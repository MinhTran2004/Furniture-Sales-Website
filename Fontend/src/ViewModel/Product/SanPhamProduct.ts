import { useEffect, useRef, useState } from "react";
import { ProductSevice } from "../../Sevice/ProductSevice";
import { imageProduct, Product } from "../../Model/ProductModel";

const SanPhamProduct = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState<imageProduct[]>([]);
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState('');
    const [label, setLabel] = useState('');
    const [quantity, setQuantity] = useState('');
    const [type, setType] = useState('');

    //Màn hình Sản phẩm
    const [dataProduct, setDataProduct] = useState<Product[]>([]);
    const filter = useRef('category');
    const detailType = useRef('All'); 
    const isdrawFilter = useRef<any>(null);
    const limitProduct = useRef(8);

    const changeDraw = () => {
        if (isdrawFilter.current) {
            isdrawFilter.current.style.display =
                isdrawFilter.current.style.display === 'block' ? 'none' : 'block';
        }
    };

    const getAllProductBySizeAndFilter = async () => {
        const reponse = await ProductSevice.getAllProductBySizeAndFilter(filter.current, detailType.current, 0, limitProduct.current);
        setDataProduct(reponse);
        console.log(reponse);
    }

    useEffect(() => {
        getAllProductBySizeAndFilter();
    },[])

    return {
        id, name, image, price, sale, label, quantity, type,
        setId, setName, setImage, setPrice, setSale, setLabel, setQuantity, setType,
        dataProduct,
        filter, detailType, isdrawFilter, limitProduct, setDataProduct,
        getAllProductBySizeAndFilter, changeDraw,
    }
}

export default SanPhamProduct;
import { useEffect, useState } from "react";
import { ProductSevice } from "../../Sevice/ProductSevice";
import { imageProduct, Product } from "../../Model/ProductModel";

const TrangChuProduct = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState<imageProduct[]>([]);
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState('');
    const [label, setLabel] = useState('');
    const [quantity, setQuantity] = useState('');
    const [type, setType] = useState('');

    //Màn hình Trang chủ
    const [typeSofa, setTypeSofa] = useState<Product[]>([]);
    const [typeLamp, setTypeLamp] = useState<Product[]>([]);
    const [typeTable, setTypeTable] = useState<Product[]>([]);
    const [typeChair, setTypeChair] = useState<Product[]>([]);

    const getAllProductBySizeAndType = async () => {
        const sofa = await ProductSevice.getAllProductBySizeAndType(8, "Ghế Sofa");
        const lamp = await ProductSevice.getAllProductBySizeAndType(4, "Đèn");
        const table = await ProductSevice.getAllProductBySizeAndType(4, "Bàn");
        const chair = await ProductSevice.getAllProductBySizeAndType(4, "Ghế");

        setTypeSofa(sofa);
        setTypeLamp(lamp);
        setTypeTable(table);
        setTypeChair(chair);
    }

    useEffect(() => {
        getAllProductBySizeAndType();
    }, []);

    return {
        id, name, image, price, sale, label, quantity, type,
        setId, setName, setImage, setPrice, setSale, setLabel, setQuantity, setType,
        typeSofa, typeLamp, typeChair, typeTable,
        setTypeSofa, setTypeLamp, setTypeChair, setTypeTable,
        getAllProductBySizeAndType,
    }
}

export default TrangChuProduct;
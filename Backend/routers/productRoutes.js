const express = require('express');
const Product = require('../model/product');

const router = express.Router();

//them san pham
router.post('/addProduct', async (req, res) => {
    try {
        const product = new Product(req.body);
        const reponse = await product.save();
        res.send(reponse);
    } catch (err) {
        console.log(err);
    }
})

//Lay tat ca san pham
router.get('/getAllProduct', async (req, res) => {
    try {
        const product = await Product.find();
        res.send(product);
    } catch (err) {
        console.log(err);
    }
})

router.get('/getAllProductBySizeAndType', async (req, res) => {
    try {
        const limit = req.query.size;
        const type = req.query.type;
        
        let reponse = "";

        switch (type) {
            case "Ghế Sofa":
                reponse = await Product.find({ type: type }).skip(0).limit(limit);
                res.send(reponse);
                break;
            case "Đèn":
                reponse = await Product.find({ type: type }).skip(0).limit(limit);
                res.send(reponse);
                break;
            case "Bàn":
                reponse = await Product.find({ type: type }).skip(0).limit(limit);
                res.send(reponse);
                break;
            case "Ghế":
                reponse = await Product.find({ type: type }).skip(0).limit(limit);
                res.send(reponse);
            default:
                reponse = await Product.find().skip(0).limit(limit);
        }
    } catch (err) {
        console.log(err);
    }
})

router.get('/getAllProductBySizeAndFilter', async (req, res) => {
    try {
        const filter = req.query.filter;
        const detailtype = req.query.detailtype;
        const skip = req.query.skip
        const limit = req.query.limit;

        console.log(filter, detailtype, skip, limit);
        
        let reponse = "";

        if (detailtype === "All") {
            reponse = await Product.find().skip(skip).limit(limit);
            res.send(reponse);
            console.log('hihi');
            
        } else {
            switch (filter) {
                case "category":
                    reponse = await Product.find({ type: detailtype }).skip(skip).limit(limit);
                    res.send(reponse);
                    break;
                case "color":
                    reponse = await Product.find({ "image.color": detailtype }).skip(skip).limit(limit);
                    res.send(reponse);
                    break;
                case "price":
                    reponse = await Product.find({ sale: detailtype }).skip(skip).limit(limit);
                    res.send(reponse);
                    break;
                case "all":
                    reponse = await Product.find().skip(skip).limit(limit);
                    res.send(reponse);
                default:
                    reponse = await Product.find().skip(skip).limit(limit);
            }
        }
    } catch (err) {
        console.log(err);
    }
})

//Lay san pham theo so luong
router.get('/getProductSize', async (req, res) => {
    try {
        const skip = req.query.skip;
        const limit = req.query.limit;
        const product = await Product.find().skip(skip).limit(limit);
        res.send(product);
    } catch (err) {
        console.log(err);
    }
})

//Lay san pham theo id
router.get('/getProduct/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const reponse = await Product.findById(id);
        res.send(reponse);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;

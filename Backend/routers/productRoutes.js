const express = require('express');
const Product = require('../model/product');

const router = express.Router();

router.post('/addProduct', async (req, res) => {
    try{
        const product = new Product(req.body);
        const reponse = await product.save();
        res.send(reponse);
    }catch(err){
        console.log(err);
    }
})

router.get('/getAllProduct', async (req, res) => {
    try{
        const product = await Product.find();
        res.send(product);
    }catch(err){
        console.log(err);
    }
})

router.get('/getProduct/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const reponse = await Product.findById(id);
        res.send(reponse);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;

const express = require('express');
const Order = require('../model/order');
const Cart = require("../model/cart");

const router = express.Router();

router.post('/addOrder', async (req, res) => {
    try {
        delete req.body.id;
        const data = new Order(req.body);
        const reposne = await data.save();
        res.send(reposne);
    } catch (err) {
        console.log(err);
    }
});

router.get('/getAllOrder', async (req, res) => {
    try {
        const repone = await Order.find();   
        res.send(repone);
    } catch (err) {
        console.log(err);
    }
})

router.get('/getOrderByid/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const reponse = await Cart.findById(id);
        res.send(reponse)
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
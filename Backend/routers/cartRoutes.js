const express = require('express');
const Cart = require('../model/cart');

const router = express.Router();

router.post('/addCart', async (req, res) => {
    try {
        const cart = new Cart(req.body);
        const reponse = await cart.save();
        res.send(reponse);
    } catch (err) {
        console.log(err);
    }
})

router.get('/getAllCart', async (req, res) => {
    try {
        const reponse = await Cart.find();
        res.send(reponse)
    } catch (err) {
        console.log(err);
    }
})

router.patch('/updateCartQuantityById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        console.log(id + data);
        
        const reponse = await Cart.findByIdAndUpdate(id, { quantity: data.quantity });
        res.json(reponse);
    } catch (err) {
        console.log(err);
    }
})

router.delete('/deleteCartById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const reponse = await Cart.findByIdAndDelete(id);
        res.send(reponse);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
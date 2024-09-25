const express = require('express');
const Cart = require('../model/cart');

const router = express.Router();

//Them san pham vao gio hang
router.post('/addCart', async (req, res) => {
    try {
        const cart = new Cart(req.body);
        const reponse = await cart.save();
        console.log(reponse);
        
        res.send(reponse);
    } catch (err) {
        console.log(err);
    }
})
//Lay tat ca san pham trong gio hang
router.get('/getAllCart', async (req, res) => {
    try {
        const reponse = await Cart.find();
        res.send(reponse)
    } catch (err) {
        console.log(err);
    }
})
//update so luong san pham
router.patch('/updateCartQuantityById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        
        const reponse = await Cart.findByIdAndUpdate(id, { quantity: data.quantity });
        res.json(reponse);
    } catch (err) {
        console.log(err);
    }
})
//xoa san pham khoi gio hang
router.delete('/deleteCartById/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        
        const reponse = await Cart.findByIdAndDelete(id);
        res.send(reponse);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
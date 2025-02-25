const express = require('express');
const Cart = require('../model/cart');

const router = express.Router();

//Them san pham vao gio hang
router.post('/addCart', async (req, res) => {
    try {
        delete req.body._id;
        const cart = new Cart(req.body);
        const reponse = await cart.save();
        res.status(200).send('Thêm thành công');
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
        const repose = await Cart.findByIdAndDelete(id);
        res.send(repose);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
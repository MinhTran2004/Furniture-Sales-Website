const express = require('express');
const Account = require('../model/account');

const router = express.Router();

//Tao tai khoan
router.post('/addAccount', async (req, res) => {
    try {
        const account = new Account(req.body);
        await account.save();
    } catch (err) {
        console.log(err);
    }
})
//Kiem tra tai khoan
router.get('/getAccount', async (req, res) => {
    try {
        const account = await Account.find();
        res.status(200).send(account);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send({ error: err.message });
    }
});
//Xoa tai khoan
router.delete('/deleteAccount/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Account.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;
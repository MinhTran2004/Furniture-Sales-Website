const express = require('express');
const User = require('../model/user');

const router = express.Router();

router.post('/addUser', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
    } catch (err) {
        console.log(err);
    }
})

router.get('/getUser', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send({ error: err.message });
    }
});

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
})


module.exports = router;
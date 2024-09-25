const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const userRoutes = require('./routers/userRoutes');
const productRoutes = require('./routers/productRoutes');
const cartRoutes = require('./routers/cartRoutes');


const app = express();
const port = 5000;

connectDB();
app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);

app.listen(port, () => {
  console.log(`Ứng dụng đang lắng nghe trên cổng ${port}`);
});
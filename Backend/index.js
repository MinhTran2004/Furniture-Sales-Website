const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const accountRoutes = require('./routers/accountRoutes');
const productRoutes = require('./routers/productRoutes');
const cartRoutes = require('./routers/cartRoutes');
const orderRoutes = require('./routers/orderRoutes');

const app = express();
const port = 5000;

connectDB();
app.use(cors());
app.use(express.json());

app.use('/account', accountRoutes);
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);

app.listen(port, () => {
  console.log(`Ứng dụng đang lắng nghe trên cổng ${port}`);
});
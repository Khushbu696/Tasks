const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const rateLimiter = require('./middleware/rateLimiter');

dotenv.config();
const app = express();
app.use(express.json());
app.use(rateLimiter);

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Root
app.get('/', (req, res) => res.send('Server is running ✅'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

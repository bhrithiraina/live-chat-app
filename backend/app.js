const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // loads env variables

const app = express();

// Middleware 
app.use(cors());
app.use(express.json()); // for json body parsing

const protectedRoutes = require('./routes/protectedRoutes');
app.use('/api/protected', protectedRoutes);

// Routes (we will add real ones later)
const authRoutes = require('./routes/authroutes');
app.use('/api/auth', authRoutes);




app.get('/', (req, res) => {
    res.send('Chat App Backend Is Running');
});

module.exports = app;
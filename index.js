require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json()); // req.body

// routes

// register and login routes
app.use('/auth', require('./routes/jwtAuth'))

// dashboard route
app.use('/dashboard', require('./routes/dashboard'))

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server has started on port ${port}.`);
});

// https://www.youtube.com/watch?v=7UQBMb8ZpuE&t=4537s
// Learn JWT with the PERN stack by building a Registration/Login system Part 1  -- api web server
// Mar 17, 2020 lengh - 1:33

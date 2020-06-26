require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT); 
});

module.exports = app;
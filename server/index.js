const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
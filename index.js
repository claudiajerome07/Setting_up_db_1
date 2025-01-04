const express = require('express');
const { resolve } = require('path');
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()


const app = express();
const port = 3010;
app.use(express.json())
app.use(express.static('static'));

mongoose
  .connect(process.env.MONGO_URI)
  .then(()=> console.log('Connected to database'))
  .catch((err) => console.log('Error connecting to database:',err ))

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

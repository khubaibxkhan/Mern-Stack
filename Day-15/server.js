const express = require('express');
const data = require('./views/data.json');

const app = express();

app.get('/',(req,res) => {
    res.sendFile('./views/index.html',{root: __dirname});
});

app.get('/api/hello', (req,res) => {
    res.json(data);
});

app.use((req,res) => {
    res.status(404).sendFile('./views/404.html' , {root: __dirname});
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


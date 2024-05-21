const express = require('express');
const admin = require('firebase-admin');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

let staticPath = path.join(__dirname, 'public');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'))
  });

app.get('/404', (req,res)=>{
    res.sendFile(path.join(staticPath, '404.html'));
})
app.use((req, res)=>{
res.redirect('/404');
})

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });

const express = require('express');
const app = express();
const path = require('path');
//
//const { getSerie } = require('./getSerie.js')




//usa pastas do sistema
app.use('/image', express.static('img'));
app.use('/frontend/_site', express.static('site'));
app.use('/css', express.static('css'));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/old/index.html'));
});
app.get('/exemplo', async function (req, res) {
   console.log("Got a GET request for the homepage");
   

    
  res.sendFile(path.join(__dirname + '/old/geraSerie.html'));
});
const porta = process.env.PORT || 3000
const server = app.listen(porta, function(){
    console.log(`localhost:${porta}`)
});
const express = require ('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'files')));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000);
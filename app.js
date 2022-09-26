const express = require('express');
const mongoose = require('mongoose');
const mustacheExpress = require('mustache-express');1
const bodyParser = require('body-parser');
const url = 'mongodb+srv://prateek:prateek471@cluster0.fchpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();
const mustache = mustacheExpress();
mustache.cache = null;
app.engine('mustache',mustache);
app.set('view engine','mustache');
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.urlencoded({ extended: true }));
    



const homeRouter = require('./routes/home');
const path = require('path');

app.use(express.static('public'));
    app.use(express.static(path.join(__dirname, '/public')));

mongoose.connect(url, {useNewUrlParser:true})
.then(()=>{
    app.use(express.json());
    
    app.use('/',homeRouter);
});
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...');
});

app.listen(9000, () => {
    console.log('Server started');
});
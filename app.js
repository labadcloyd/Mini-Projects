const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const ejs = require('ejs')

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('listening on port 3000')
})

app.get('/projects/Dicee-Challenge',(req,res)=>{
    res.render('projects/Dicee-Challenge/dicee.ejs');
})



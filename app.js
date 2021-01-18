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

app.get('/projects/dice-roller',(req,res)=>{
    res.render('projects/dice-roller.ejs');
})
app.get('/projects/drum-kit',(req,res)=>{
    res.render('projects/drum-kit.ejs');
})
app.get('/projects/simon-game',(req,res)=>{
    res.render('projects/simon-game.ejs');
})

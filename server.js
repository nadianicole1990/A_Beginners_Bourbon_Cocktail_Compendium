// DEPENDENCIES && GLOBAL VARIABLES
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 2222;

const cocktails = require('./models/cocktails.js')

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// INDEX
app.get('/cocktails/', (req, res) => {
    res.render('index.ejs', {
        cocktails: cocktails
    })
})

// NEW
app.get('/cocktails/new', (req, res) => {
    res.render('new.ejs')
})

// DELETE: DELETE - /cocktails/:index
 
// UPDATE: PUT - /cocktails/:index

// CREATE
app.post('/cocktails/', (req, res) => {
    console.log(req.body)
    if (req.body.classic === 'on') {
        req.body.classic = true
        } else if (req.body.contemporary === 'on') {
            req.body.classic = false
            }
    cocktails.push(req.body)
    res.redirect('/cocktails/')
})

// EDIT: GET - /cocktails/:index/edit - edit.ejs

// SHOW
app.get('/cocktails/:index', (req, res) => {
    res.render('show.ejs', {
        cocktails: cocktails[req.params.index]
    })
})

// LISTENERS
app.listen(port, () => {
    console.log(`I hear you loud and clear on port ${port}`);
})
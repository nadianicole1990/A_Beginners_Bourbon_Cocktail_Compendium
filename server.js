// DEPENDENCIES && GLOBAL VARIABLES
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const port = process.env.PORT || 2222;

const cocktails = require('./models/cocktails.js')

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

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

// DELETE
app.delete('/cocktails/:index', (req, res) => {
    cocktails.splice(req.params.index, 1)
    res.redirect('/cocktails/')
})
 
// UPDATE
app.put('/cocktails/:index', (req, res) => {
    if (req.body.classic === 'on') {
        req.body.classic = true
        } else if (req.body.contemporary === 'on') {
            req.body.classic = false
            }
    cocktails[req.params.index] = req.body
    res.redirect('/cocktails/')
})

// CREATE
app.post('/cocktails/', (req, res) => {
    if (req.body.classic === 'on') {
        req.body.classic = true
        } else if (req.body.contemporary === 'on') {
            req.body.classic = false
            }
    cocktails.push(req.body)
    res.redirect('/cocktails/')
})

// EDIT
app.get('/cocktails/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        cocktails: cocktails[req.params.index],
        index: req.params.index
    })
})

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
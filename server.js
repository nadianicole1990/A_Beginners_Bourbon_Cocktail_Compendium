// DEPENDENCIES && GLOBAL VARIABLES
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 2222;

const cocktails = require('./models/cocktails.js')

// MIDDLEWARE

// INDEX: GET - /cocktails/ - index.ejs

// NEW: GET - /cocktails/new - new.ejs

// DELETE: DELETE - /cocktails/:index
 
// UPDATE: PUT - /cocktails/:index

// CREATE: POST - /cocktails/

// EDIT: GET - /cocktails/:index/edit - edit.ejs

// SHOW: GET - /cocktails/ - show.ejs

// LISTENERS
app.listen(port, () => {
    console.log(`I hear you loud and clear on port ${port}`);
})
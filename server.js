// DEPENDENCIES && GLOBAL VARIABLES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 2222;
const mongoURI = process.env.MONGOURI;

async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI);
        console.log('The connection with MongoDB is established');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongo();

// DATABASE
const cocktailsController = require('./controllers/cocktails.js');
const bourbonsController = require('./controllers/bourbons.js');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/cocktails/', cocktailsController);
app.use('/bourbons/', bourbonsController);

// LISTENERS
app.listen(port, () => {
    console.log(`I hear you loud and clear on port ${port}`);
})
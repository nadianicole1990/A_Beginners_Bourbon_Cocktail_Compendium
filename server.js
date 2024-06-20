// DEPENDENCIES && GLOBAL VARIABLES
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const port = 2222;
const mongoURI = 'mongodb://127.0.0.1:27017/' + 'cocktails';

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

const Cocktails = require('./models/cocktails.js');

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// SEED
app.get('/cocktails/seed', async (req, res) => {
    try {
      await Cocktails.create([
        {
            name: 'Old Fashioned',
            tools: [],
            glass: 'Rocks Glass',
            method: 'Stir & Strain',
            pourChoice: '',
            otherIngredients: ['Sugar', 'Angostura Bitters', 'Water'],
            garnish: 'Orange Twist',
            classic: true,
            funFact: ''
        },
        {
            name: 'Whiskey Sour',
            tools: [],
            glass: 'Rocks Glass (Over Ice) or Coupe (Without Ice)',
            method: 'Shake & Strain',
            pourChoice: '',
            otherIngredients: ['Fresh Lemon Juice', 'Simple Syrup', 'Egg White'],
            garnish: 'Angostura Bitters',
            classic: true,
            funFact: ''
        },
        {
            name: 'Mint Julep',
            tools: [],
            glass: 'Julep Cup OR Rocks Glass',
            method: 'Muddle & Stir',
            pourChoice: '',
            otherIngredients: ['Mint', 'Simple'],
            garnish: 'Mint Sprig',
            classic: true,
            funFact: ''
        },
        {
            name: 'Boulevardier',
            tools: [],
            glass: 'Rocks Glass',
            method: 'Stir & Strain',
            pourChoice: '',
            otherIngredients: ['Campari', 'Sweet Vermouth'],
            garnish: 'Orange Twist',
            classic: true,
            funFact: ''
        },
        {
            name: 'Paper Plane',
            tools: [],
            glass: 'Coupe',
            method: 'Shake & Strain',
            pourChoice: '',
            otherIngredients: ['Aperol', 'Amaro Nonino Quintessentia', 'Fresh Lemon Juice'],
            garnish: 'Small Paper Plane',
            classic: false,
            funFact: ''
        }
    ]);
      res.redirect('/cocktails');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

// INDEX
app.get('/cocktails/', async (req, res) => {
    try {
        const allCocktails = await Cocktails.find({});
        res.render('index.ejs', { cocktails: allCocktails })
    } catch (error) {
        console.error(error);
    }
});

// NEW
app.get('/cocktails/new', (req, res) => {
    res.render('new.ejs')
});

// DELETE
app.delete('/cocktails/:id', async (req, res) => {
    try {
        await Cocktails.findByIdAndDelete(req.params.id);
        res.redirect('/cocktails/');
    } catch (error) {
        console.error(error);
    }
});

// UPDATE
app.put('/cocktails/:id', async (req, res) => {
    if (req.body.classic === 'on') {
        req.body.classic = true
    } else if (req.body.contemporary === 'on') {
        req.body.classic = false
    }
    try {
        const updatedCocktails = await Cocktails.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/cocktails/');
    } catch (error) {
        console.error(error);
    }
});

// CREATE
app.post('/cocktails/', async (req, res) => {
    if (req.body.classic === 'on') {
        req.body.classic = true;
    } else if (req.body.contemporary === 'on') {
            req.body.classic = false;
    }
    try {
        const createdCocktail = await Cocktails.create(req.body);
        res.redirect('/cocktails/');
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// EDIT
app.get('/cocktails/:id/edit', async (req, res) => {
    try {
        const foundCocktail = await Cocktails.findById(req.params.id);
        res.render('edit.ejs', { cocktail: foundCocktail})
    } catch (error) {
        console.error(error);
    }
});

// SHOW
app.get('/cocktails/:id', async (req, res) => {
    try {
        const foundCocktail = await Cocktails.findById(req.params.id)
        res.render('show.ejs', { cocktail: foundCocktail });
    } catch (error) {
        console.error(error);
    }
});

const initialCocktails = [
    {
        name: 'Old Fashioned',
        tools: [],
        glass: 'Rocks Glass',
        method: 'Stir & Strain',
        pourChoice: '',
        otherIngredients: ['Sugar', 'Angostura Bitters', 'Water'],
        garnish: 'Orange Twist',
        classic: true,
        funFact: ''
    },
    {
        name: 'Whiskey Sour',
        tools: [],
        glass: 'Rocks Glass (Over Ice) or Coupe (Without Ice)',
        method: 'Shake & Strain',
        pourChoice: '',
        otherIngredients: ['Fresh Lemon Juice', 'Simple Syrup', 'Egg White'],
        garnish: 'Angostura Bitters',
        classic: true,
        funFact: ''
    },
    {
        name: 'Mint Julep',
        tools: [],
        glass: 'Julep Cup OR Rocks Glass',
        method: 'Muddle & Stir',
        pourChoice: '',
        otherIngredients: ['Mint', 'Simple'],
        garnish: 'Mint Sprig',
        classic: true,
        funFact: ''
    },
    {
        name: 'Boulevardier',
        tools: [],
        glass: 'Rocks Glass',
        method: 'Stir & Strain',
        pourChoice: '',
        otherIngredients: ['Campari', 'Sweet Vermouth'],
        garnish: 'Orange Twist',
        classic: true,
        funFact: ''
    },
    {
        name: 'Paper Plane',
        tools: [],
        glass: 'Coupe',
        method: 'Shake & Strain',
        pourChoice: '',
        otherIngredients: ['Aperol', 'Amaro Nonino Quintessentia', 'Fresh Lemon Juice'],
        garnish: 'Small Paper Plane',
        classic: false,
        funFact: ''
    }
]

// async function insertManyCocktails(cocktailsData) {
//     try {
//         const cocktails = await Cocktails.insertMany(cocktailsData);
//     } catch (error) {
//         console.error(error);
//     }
// }

// insertManyCocktails(initialCocktails);

// LISTENERS
app.listen(port, () => {
    console.log(`I hear you loud and clear on port ${port}`);
})
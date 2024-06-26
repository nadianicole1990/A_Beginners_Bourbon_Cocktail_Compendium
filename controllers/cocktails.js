const express = require('express');
const router = express.Router();
const Cocktails = require('../models/cocktails.js')

// SEED
router.get('/seed', async (req, res) => {
    try {
      await Cocktails.create([
        {
            name: 'Old Fashioned',
            tools: [],
            glass: 'Rocks Glass',
            method: 'Stir & Strain',
            budgetPourChoice: '',
            premiumPourChoice: '',
            otherIngredients: ['Sugar', 'Angostura Bitters', 'Water'],
            garnish: 'Orange Twist',
            classic: true,
            image: ''
        },
        {
            name: 'Whiskey Sour',
            tools: [],
            glass: 'Rocks Glass (Over Ice) or Coupe (Without Ice)',
            method: 'Shake & Strain',
            budgetPourChoice: '',
            premiumPourChoice: '',
            otherIngredients: ['Fresh Lemon Juice', 'Simple Syrup', 'Egg White'],
            garnish: 'Angostura Bitters',
            classic: true,
            image: ''
        },
        {
            name: 'Mint Julep',
            tools: [],
            glass: 'Julep Cup OR Rocks Glass',
            method: 'Muddle & Stir',
            budgetPourChoice: '',
            premiumPourChoice: '',
            otherIngredients: ['Mint', 'Simple'],
            garnish: 'Mint Sprig',
            classic: true,
            image: ''
        },
        {
            name: 'Boulevardier',
            tools: [],
            glass: 'Rocks Glass',
            method: 'Stir & Strain',
            budgetPourChoice: '',
            premiumPourChoice: '',
            otherIngredients: ['Campari', 'Sweet Vermouth'],
            garnish: 'Orange Twist',
            classic: true,
            image: ''
        },
        {
            name: 'Paper Plane',
            tools: [],
            glass: 'Coupe',
            method: 'Shake & Strain',
            budgetPourChoice: '',
            premiumPourChoice: '',
            otherIngredients: ['Aperol', 'Amaro Nonino Quintessentia', 'Fresh Lemon Juice'],
            garnish: 'Small Paper Plane',
            classic: false,
            image: ''
        }
    ]);
      res.redirect('/cocktails/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

// INDEX
router.get('/', async (req, res) => {
    try {
        const allCocktails = await Cocktails.find({});
        res.render('index.ejs', { cocktails: allCocktails })
    } catch (error) {
        console.error(error);
    }
});

// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs')
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Cocktails.findByIdAndDelete(req.params.id);
        res.redirect('/cocktails/');
    } catch (error) {
        console.error(error);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
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
router.post('/', async (req, res) => {
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
router.get('/:id/edit', async (req, res) => {
    try {
        const foundCocktail = await Cocktails.findById(req.params.id);
        res.render('edit.ejs', { cocktail: foundCocktail})
    } catch (error) {
        console.error(error);
    }
});

// SHOW
router.get('/:id', async (req, res) => {
    try {
        const foundCocktail = await Cocktails.findById(req.params.id)
        res.render('show.ejs', { cocktail: foundCocktail });
    } catch (error) {
        console.error(error);
    }
});

module.exports = router
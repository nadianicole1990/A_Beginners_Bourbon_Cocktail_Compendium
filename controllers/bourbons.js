const express = require('express');
const router = express.Router();
const Bourbons = require('../models/bourbons.js')

// SEED
router.get('/seed', async (req, res) => {
    try {
      await Bourbons.create([
        {
            name: 'test',
            distillery: 'test',
            budget: true,
            appearance: 'test',
            nose: 'test',
            taste: 'test',
            finish: 'test',
            image: 'test'
        },
    ]);
      res.redirect('/bourbons/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });

// INDEX
router.get('/', async (req, res) => {
    try {
        const allBourbons = await Bourbons.find({});
        res.render('bourbonindex.ejs', { bourbons: allBourbons })
    } catch (error) {
        console.error(error);
    }
});

// NEW
router.get('/new', (req, res) => {
    res.render('bourbonnew.ejs')
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Bourbons.findByIdAndDelete(req.params.id);
        res.redirect('/bourbons/');
    } catch (error) {
        console.error(error);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.budget === 'on') {
        req.body.budget = true
    } else if (req.body.premium === 'on') {
        req.body.budget = false
    }
    try {
        const updatedBourbons = await Bourbons.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/bourbons/');
    } catch (error) {
        console.error(error);
    }
});

// CREATE
router.post('/', async (req, res) => {
    if (req.body.budget === 'on') {
        req.body.budget = true;
    } else if (req.body.premium === 'on') {
            req.body.budget = false;
    }
    try {
        const createdBourbon = await Bourbons.create(req.body);
        res.redirect('/bourbons/');
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// EDIT
router.get('/:id/edit', async (req, res) => {
    try {
        const foundBourbon = await Bourbons.findById(req.params.id);
        res.render('bourbonedit.ejs', { bourbon: foundBourbon})
    } catch (error) {
        console.error(error);
    }
});

// SHOW
router.get('/:id', async (req, res) => {
    try {
        const foundBourbon = await Bourbons.findById(req.params.id)
        res.render('bourbonshow.ejs', { bourbon: foundBourbon });
    } catch (error) {
        console.error(error);
    }
});

module.exports = router
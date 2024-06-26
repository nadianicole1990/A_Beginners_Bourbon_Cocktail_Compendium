const mongoose = require('mongoose');
const Schema = mongoose.Schema

const cocktailSchema = new Schema({
    name: {type: String, required: true, unique: true},
    tools: Array,
    glass: String,
    method: String,
    budgetPourChoice: String,
    premiumPourChoice: String,
    otherIngredients: Array,
    garnish: String,
    classic: Boolean,
    funFact: String,
    image: String
});

const Cocktails = mongoose.model('Cocktails', cocktailSchema);

module.exports = Cocktails
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bourbonSchema = new Schema({
    name: {type: String, required: true, unique: true},
    distillery: String,
    budget: Boolean,
    mashBill: Array,
    nose: String,
    taste: String,
    finish: String,
    image: String
});

const Bourbons = mongoose.model('Bourbons', bourbonSchema);

module.exports = Bourbons
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    type: String,
    ingredients: String,
    procedure: String
})
const Recipe = mongoose.model('recipe', recipeSchema)

exports.Recipe = Recipe
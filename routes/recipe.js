var express = require('express');
var router = express.Router();
const a = require('../models/recipe-api');
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
})



/*go to new recipe form */
router.get('/new', (req, res, next) => {
    res.render('NewRecipe', {
        title: 'Recipe'
    })
})

router.post('/new', (req, res, next) => {
    if (req.body.type == '') {
        res.send('Error: Type should not be left unchosen')
    } else {
        let recipe = new a.Recipe({
            _id: new mongoose.types.objectId(),
            title: req.body.title,
            type: req.body.type,
            ingredients: req.body.ingredients,
            procedure: req.body.procedure
        })
        recipe.save((err, recipe) => {
            if (err) {
                throw err;
            } else {
                res.send(recipe)
            }
        })
    }

})

module.exports = router;
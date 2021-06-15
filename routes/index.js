var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const a = require('../models/recipe-api')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Recipe Book',
        isIndex: true
    });
});


router.get('/query', (req, res, next) => {
    a.Recipe.find({
        $or: [
            { 'type': { $regex: req.query.search, $options: 'i' } },
            { 'title': { $regex: req.query.search, $options: 'i' } }
        ]
    }, (err, recipe) => {
        if (err) {
            console.log(err)
        } else {
            if (!recipe.length) {
                res.render('index', {
                    title: 'Recipe',
                    isQuery: false,
                    message: 'Query returned zero'
                })
            } else if (req.query.search === '' || req.query.search === '') {
                res.render('index', {
                    title: 'Recipe',
                    isQuery: false,
                    message: 'Cannot query empty string'
                })
            } else {
                res.render('index', {
                    title: 'Recipe',
                    isQuery: true,
                    recipe: recipe
                })
            }
        }
    })
});

module.exports = router;
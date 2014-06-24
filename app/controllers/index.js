/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    _ = require('underscore');


exports.render = function(req, res) {
    console.log('Rendering the home page');

    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};

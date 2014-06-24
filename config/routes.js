var async = require('async');

module.exports = function(app) {

    //Home route
    console.log('Configruing the routes');
    var index = require('../app/controllers/index');
    app.get('/', index.render);
};

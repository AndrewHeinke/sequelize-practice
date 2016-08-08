// BASE SETUP
var express = require('express');
var app     = express();
var path = require('path');
var exphbs  = require('express-handlebars');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
var methodOverride = require('method-override'); // for puts and deletes in express
var PORT    = process.env.PORT || 3000;

var models = require('./models');

// override POST to have DELETE and PUT
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// get an instance of router
var router = express.Router();

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/users/:user_id/listings/', function(req, res){
    console.log(req.params.user_id);
    models.Users.findOne({ where: {id: req.params.id} })
    .then(function(user){
        user.getListings().then(function(listings){
            res.render('user/listings', { listings: listings, name: user.name, id: user.id });
        });
    });
});

app.put('/listings/:listing_id', function(req, res){
    // Update my listing
});

app.get('/users/:user_id/create', function(req, res){
    // Display the Form
    res.render('user/new_listing', { id: req.params.user_id });
});

app.post('/users/:user_id/listings/add', function(req, res){
    // Add new listing
    console.log(req.body);
});

app.get('/users/:id?/', function(req, res){
    if(req.params.id){
        models.Users.findOne({where: {id: req.params.id} }).then(function(users){
            res.render('user/index', { users: users});
        });
    }
    else{
        models.Users.findAll().then(function(users){
            res.render('user/index', { users: users});
        });
    }

});

app.get('/listings', function(req, res){
    models.Listings.findAll()
    .then(function(listings){
        res.render('listings/index', { listings: listings });
    });
});


// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(PORT, function(){
    console.log('Magic happens on port ' + PORT);
});

const { Character } = require('../models/characterModels');

// object will export all character controller middleware functions for our API router
const characterController = {};

// createCharacter requests for making a new Character model and saving to the database
characterController.createCharacter = (req, res, next) => {
    // state object will be on the body and represent the new character to create
    Character.create(req.body)
        .then(queryResponse => {
            console.log('got into the query response');
            res.locals.character = queryResponse;
            return next();
        })
        .catch((err) => {
            console.log(err);
            return next({log: 'Express error handler caught at createCharacter'});
        })
    };

// getCharacter for displaying saved characters
characterController.getCharacter = (req, res, next) => {
    console.log('entered controller');
    // find character by its name, will need to add that to state and model
    Character.findOne({name: req.body.name})
        .then(queryResponse => {
            res.locals.character = queryResponse;
            return next();
        })
        .catch((err) => {
            console.log(err);
            return next({log: 'Express error handler caught at getCharacter'})
        })
};

// updateCharacter (PUT) for changes to characters being rendered
characterController.updateCharacter = (req, res, next) => {
    Character.findOneAndUpdate({name: req.body.name})
        .then(queryResponse => {
            res.locals.character = queryResponse;
            return next();
        })
        .catch((err) => {
            console.log(err);
            return next({log: 'Express error handler caught at getCharacter'})
        })
};

// deleteCharacter for permanently deleting characters from the database
characterController.deleteCharacter = (req, res, next) => {
    Character.findOneAndDelete({name: req.body.name})
        .then(queryResponse => {
            res.locals.character = queryResponse;
            return next();
        })
        .catch((err) => {
            console.log(err);
            return next({log: 'Express error handler caught at getCharacter'});
        })
};

module.exports = characterController;
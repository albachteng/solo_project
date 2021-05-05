const db = require('../models/characterModels');

// object will export all character controller middleware functions for our API router
const characterController = {};

// createCharacter requests for making a new Character model and saving to the database
characterController.createCharacter = (req, res, next) => {
    const queryText = 
        `INSERT INTO characters 
        (...columns)
        VALUES (...$1, $2, $3...)`;
    const queryParams = []; // TODO pull params off of req.body?
    db.query(queryText, queryParams)
        .then(queryResponse => {
            res.locals.addCharacter = queryResponse.rows;
            next();
        })
        .catch((err) => {
            console.log(err);
            next({log: 'Express error handler caught at createCharacter'});
        })
    };

// getCharacter for displaying saved characters
characterController.getCharacter = (req, res, next) => {
    const queryParams = [req.query.id]
    const queryText = 
        `SELECT * FROM characters 
        WHERE _id='$1'`;
    db.query(queryText, queryParams)
        .then(queryResponse => {
            res.locals.character = queryResponse.rows;
        })
        .catch((err) => {
            console.log(err);
            next({log: 'Express error handler caught at getCharacter'})
        })
};

// updateCharacter (PUT) for changes to characters being rendered
characterController.updateCharacter = (req, res, next) => {
    
};

// deleteCharacter for permanently deleting characters from the database
characterController.deleteCharacter = (req, res, next) => {

};
const express = require('express'); 
const characterController = require('../controllers/characterController');
const router = express.Router(); 

// middleware chain will probably be longer later on
router.get('/', 
  characterController.getCharacter(), 
  (req, res) => {
    res.status(200).json(res.locals.character);
  }
);

module.exports = router;
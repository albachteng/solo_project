const express = require('express'); 
const characterController = require('../controllers/characterController');
const router = express.Router(); 

router.get('/', 
  characterController.getCharacter, 
  (req, res) => {
    res.status(200).json(res.locals.character);
  }
);

router.post('/',
  characterController.createCharacter,
  (req, res) => {
    res.status(200).json(res.locals.character);
  }
);

router.put('/', 
  characterController.updateCharacter,
  (req, res) => {
    res.status(200).json(res.locals.character);
  }
);

router.delete('/', 
  characterController.deleteCharacter,
  (req, res) => {
    res.status(200).json(res.locals.character);
  }
)

module.exports = router;
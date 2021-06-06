const mongoose = require('mongoose'); 
require('dotenv').config();

const uri = process.env.MONGO_URI;
console.log(uri);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'solo_project'
})
    .then(( console.log('connected to MongoDB')))
    .catch(err => console.log(err));

const Schema = mongoose.Schema; 

const characterSchema = new Schema({
    name: String,
    stats: Object,
    race: Object,
    currentLevel: Number,
    characterClass: Object,
    levels: Object,
    classFeatureChoices: Object,
});

const Character = mongoose.model('character', characterSchema);

module.exports = {Character};
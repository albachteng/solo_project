const mongoose = require('mongoose'); 

const uri = 'mongodb+srv://admin:correcthorsebattery@cluster0.faeej.mongodb.net/Solo_Project?retryWrites=true&w=majority';

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
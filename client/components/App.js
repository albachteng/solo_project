import React, {Component} from 'react';
import Stats from './Stats';
import Abilities from './Abilities';
import Proficiencies from './Proficiencies';
import Equipment from './Equipment';
import Finder from './Finder';
import SaveButton from './SaveButton';
import '../scss/main.scss';

/* 

stateful container component for the entire app 
holds state, handles API calls and passes state 
and functionality as props to Stats, Proficiencies and Abilities 
presentation components

*/ 

const classesArray = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'ranger', 'sorcerer', 'warlock', 'wizard',];
const racesArray = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling',];
const randomClass = () => classesArray[Math.floor(Math.random() * classesArray.length)];
const randomRace = () => racesArray[Math.floor(Math.random() * racesArray.length)];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0,
                hp: 0,
                ac: 0, 
            },
            race: {
                index: randomRace(),
                },
            currentLevel: 1,
            characterClass: {
                starting_equipment: [],
                starting_equipment_options: [],
                hit_die: 8,
                index: randomClass(),
                proficiency_choices: [
                    {choose: 0}
                ],},
            levels: {},
            classFeatureChoices: {choice: {choose: 0, from: []}}
        }
        this.rollDice = this.rollDice.bind(this); 
        this.generateStats = this.generateStats.bind(this);
        this.displayState = this.displayState.bind(this); 
        this.chooseFrom = this.chooseFrom.bind(this);  
        this.loadSavedCharacter = this.loadSavedCharacter.bind(this);
        this.saveCharacter = this.saveCharacter.bind(this);
    }

    // returns a random whole number from 1 to dice
    // optionally repeats the roll and adds it to the result num times
    // third parameter, modifier, adds a flat amount to the total
    rollDice(dice, repeat = 1, modifier = 0) {
        let result = 0;
        // repeats and adds a single roll a number of times equal to repeat
        for (let i = 0; i < repeat; i += 1) {
            // represents a single roll of a dice-sided die
            result += Math.ceil(Math.random() * dice);
        }
        // if a modifier is provided, it is added at the end before returning
        return result += modifier;
    }

    loadSavedCharacter(stateObject) {
        console.log(stateObject);
        this.setState((state, props) => {
            return {...stateObject};
        });
    }

    saveCharacter(name) {
        fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...this.state, name}),
        })
        .then(response => response.json)
        .then(data => console.log(data));
    }

    generateStats() {
        // roll between 3 and 18 for all stats
        const newStats = {};
        // TODO: add logic for dropping the lowest of four rolls
        newStats.strength = this.rollDice(6, 3);
        newStats.dexterity = this.rollDice(6, 3);
        newStats.constitution = this.rollDice(6, 3);
        newStats.intelligence = this.rollDice(6, 3);
        newStats.wisdom = this.rollDice(6, 3);
        newStats.charisma = this.rollDice(6, 3);
        newStats.AC = 10 + Math.floor((newStats.dexterity - 10) / 2); 
        newStats.HP = this.state.characterClass.hit_die + Math.floor((newStats.constitution - 10) / 2)
        
        this.setState((state, props) => {
            return {...state, 
                stats: newStats
            }
        });
    }

    displayState() {
        console.log(this.state);
    }

    // selects num number of items randomly from array and returns them as a new array
    chooseFrom(num, array) {
        if (num < 1 || !array || array.length < 1) return [];
        const output = [];
        while (num) {
            // generate a random index
            const index = Math.floor(Math.random() * array.length);
            // if we don't already have that item in the output array
            if (!output.includes(array[index])) {
                output.push(array[index]);
                num -= 1;
            } else continue;
        }
        return output;
    }

    regenerate() {
        
    }

    // makes a fetch request to the dnd5e api
    componentDidMount() {
        const baseUrl = 'https://www.dnd5eapi.co/api/';
        fetch(baseUrl + 'classes/' + this.state.characterClass.index)
            .then(response => response.json())
            .then(data => this.setState((state, props) => {
                return {...state, characterClass: data};
            }))
        fetch(baseUrl + 'classes/' + this.state.characterClass.index + '/levels/' + this.state.currentLevel)
            .then(response => response.json())
            .then(data => {
                if (data.feature_choices.length > 0) {
                    fetch('https://www.dnd5eapi.co' + data.feature_choices[0].url)
                    .then(response => response.json())
                    .then(data => {
                        this.setState((state, props) => {
                            return {...state, classFeatureChoices: data}
                        });
                    })
                }
                this.setState((state, props) => {
                return {...state, levels: data}
                })
            });
        fetch(baseUrl + 'races/' + randomRace())
            .then(response => response.json())
            .then(data => {
                this.setState((state, props) => {
                    return {...state, race: data}
                })
            });
        this.generateStats();
    }

    render() {
        return(
            <div id="app">
                <h2>Play a fucking {this.state.race.name} {this.state.characterClass.name}, coward!</h2>
                <div>
                    <Stats 
                      generateStats={this.generateStats} 
                      race={this.state.race}
                      stats={this.state.stats}
                      characterClass={this.state.characterClass}
                    />
                    <div id="blocks">
                        <Abilities 
                            classFeatureChoices={this.state.classFeatureChoices}
                            levels={this.state.levels}
                            displayState={this.displayState}
                            chooseFrom={this.chooseFrom}
                            race={this.state.race}
                            stats={this.state.stats}
                            characterClass={this.state.characterClass}
                        />
                        <Proficiencies
                            characterClass={this.state.characterClass}
                            chooseFrom={this.chooseFrom}
                        />
                        <Equipment 
                            characterClass={this.state.characterClass}
                            chooseFrom={this.chooseFrom}
                        />
                        <Finder 
                            loadSavedCharacter={this.loadSavedCharacter}
                        />
                        <SaveButton 
                            saveCharacter={this.saveCharacter}
                        />
                    </div>
                </div>
            </div>
            )
    }
}

export default App;
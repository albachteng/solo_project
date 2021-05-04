import React, {Component} from 'react';
import Stats from './Stats';
import Abilities from './Abilities';

/* 

stateful container component for the entire app 
holds state and passes state and functionality as props to Stats and Abilities presentation components

*/ 
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
            },
            abilities: [
                {
                    name: 'Ability#1',
                    desc: 'This is how the ability works!', 

                },
                {
                    name: 'Ability#2', 
                    desc: 'This is how THIS ability works!',
                },
            ],
            level: 1,
            class: 'fighter',
        }
        this.rollDice = this.rollDice.bind(this); 
        this.generateStats = this.generateStats.bind(this);
        this.getAbilities = this.getAbilities.bind(this);
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
        return result += modifier;
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
        this.setState((state, props) => {
            return {...state, stats: newStats}
        });
    }

    // ! I feel like this logic deserves its own separate file...
    // makes a fetch request to the dnd5e api
    // recursively builds a newAbilities array by filling 
    // in name and description properties on ability objects
    // for now it will simply update state when it is done
    getAbilities() {
        const newAbilities = [];
        let url = 'https://www.dnd5eapi.co/api/classes/';
        url += this.state.class + '/levels/' + this.state.level;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data.feature_choices.length >= 1) {
              data.feature_choices.forEach(choice => {
                let desc = this.getAbilityDesc(choice.url);
                newAbilities.push({name: choice.name, desc: desc});
              })
            }
            if (data.features.length >= 1) {
              data.features.forEach(feature => {
                  let desc = this.getAbilityDesc(feature.url);
                  newAbilities.push({name: feature.name, desc: desc});
              });
            }
          })
        console.log(newAbilities);
        this.setState((state, props) => {
            return {...state, abilities: newAbilities}
        });
    }

    // takes a urlQuery string to an ability and returns its description text
    getAbilityDesc(urlQuery) {
        let url = 'https://www.dnd5eapi.co' + urlQuery;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data.desc[0]);
            return data.desc[0];
        })    
    }

    render() {
        return(
            <div id="app">
                <h1>Prepare to Fight!</h1>
                <div>
                    <Stats 
                      generateStats={this.generateStats} 
                      stats={this.state.stats}
                    />
                    <Abilities 
                      abilities={this.state.abilities} 
                      getAbilities={this.getAbilities}
                    />
                </div>
            </div>
            )
    }
}

export default App;
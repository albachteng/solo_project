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
            class: {index: 'fighter'},
            levels: {},
        }
        this.rollDice = this.rollDice.bind(this); 
        this.generateStats = this.generateStats.bind(this);
        this.displayState = this.displayState.bind(this); 
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

    displayState() {
        console.log(this.state);
    }

    // ! I feel like this logic deserves its own separate file...
    // makes a fetch request to the dnd5e api
    componentDidMount() {
        console.log('running'); 
        const baseUrl = 'https://www.dnd5eapi.co/api/';
        fetch(baseUrl + 'classes/' + this.state.class.index)
            .then(response => response.json())
            .then(data => this.setState((state, props) => {
                return {...state, class: data};
            }))
        fetch(baseUrl + 'classes/' + this.state.class.index + '/levels/' + this.state.level)
            .then(response => response.json())
            .then(data => this.setState((state, props) => {
                return {...state, levels: data}
            }))
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
                      displayState={this.displayState}
                    />
                </div>
            </div>
            )
    }
}

export default App;
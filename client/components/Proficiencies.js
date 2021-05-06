import React, { useEffect, useState } from 'react';

/* 

functional component displays proficiencies from passed state 

*/ 

const Proficiencies = ({characterClass, chooseFrom, race}) => {

    const [proficienciesArray, setProficienciesArray] = useState([]);

    useEffect(() => {
        const proficiencyChoices = chooseFrom(
            characterClass.proficiency_choices[0].choose, 
            characterClass.proficiency_choices[0].from);
        const classProficiencies = characterClass.proficiencies || [];
        const racialProficiencies = race.starting_proficiencies || [];
        if (race.starting_proficiency_options) {
            racialProficiencies.concat(chooseFrom(
                race.starting_proficiency_options.choose,
                race.starting_proficiency_options.from))
        }
        setProficienciesArray([...proficiencyChoices, ...classProficiencies, ...racialProficiencies]);
    }, [characterClass, race]);

    useEffect(() => {
        console.log(proficienciesArray);
    }, [proficienciesArray]);

    return(
        <div id='proficiencies'>
            <h3>You've spent a lifetime developing a very specific set of skills...</h3>
            <ul>
                {proficienciesArray.map(proficiency => <li>{proficiency.name}</li>)}
            </ul>
        </div>
    )
}

export default Proficiencies;
import React, { useEffect, useState } from 'react';

/* 

functional component displays proficiencies from passed state 

*/ 

const Proficiencies = ({characterClass, chooseFrom}) => {

    const [proficienciesArray, setProficienciesArray] = useState([]);

    useEffect(() => {
        const proficiencyChoices = chooseFrom(
            characterClass.proficiency_choices[0].choose, 
            characterClass.proficiency_choices[0].from);
        const classProficiencies = characterClass.proficiencies || [];
        // TODO const racialProficiencies = ...; add to proficiencies below...
        setProficienciesArray([...proficiencyChoices, ...classProficiencies]);
    }, [characterClass]);

    return(
        <div id='proficiencies'>
            <h2>Proficiencies</h2>
            <ul>
                {proficienciesArray.map(proficiency => <li>{proficiency.name}</li>)}
            </ul>
        </div>
    )
}

export default Proficiencies;
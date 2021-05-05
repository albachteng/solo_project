import React, { useEffect, useState } from 'react';

/* stateless component displays proficiencies from passed state */ 

const Proficiencies = ({characterClass, chooseFrom}) => {

    const [proficienciesArray, setProficienciesArray] = useState([]);

    useEffect(() => {
        console.log(characterClass);

        const proficiencyChoices = chooseFrom(
            characterClass.proficiency_choices[0].choose, 
            characterClass.proficiency_choices[0].from);
    
        const classProficiencies = characterClass.proficiencies || [];
        
        // TODO const racialProficiencies = ...; add to proficiencies below...
    
        // proficienciesArray = proficienciesArray.concat(proficiencyChoices, classProficiencies); 
        setProficienciesArray([...proficiencyChoices, ...classProficiencies]);
    }, [characterClass]);
    
    useEffect(() => {
        console.log(proficienciesArray);
    }, [proficienciesArray]);

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
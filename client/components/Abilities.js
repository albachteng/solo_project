import React, {useEffect, useState} from 'react';
import Ability from './Ability';

/* 

presentation component that displays 
the result of a random query to the dnd api 
for (fighter) abilities

*/ 

const Abilities = ({levels, characterClass, race, displayState, classFeatureChoices, chooseFrom}) => {

    const [abilitiesArray, setAbilitiesArray] = useState([]);

    useEffect(() => {
        const classFeatures = levels.features || [];
        const racialFeatures = race.traits || [];
        const classFeatureSelections = chooseFrom(
            classFeatureChoices.choice.choose, // a number
            classFeatureChoices.choice.from) // an array
        setAbilitiesArray([...classFeatures, ...racialFeatures || [], ...classFeatureSelections  || []]);
    }, [characterClass, race]);

    // useEffect(() => {
    //     console.log(abilitiesArray);
    // }, [abilitiesArray]);

    return( 
        <div id="abilities">
            <h3>All the ways you know to kill...</h3>  
            <ul id="abilitiesList">
                {
                    abilitiesArray.map(ability => {
                        return (
                            <Ability 
                            characterClass={characterClass} 
                            levels={levels}
                            race={race} 
                            name={ability.name} 
                            url={ability.url}
                        />
                        )
                        
                })
                }
            </ul>
            {/* <button onClick={displayState}>Get abilities</button> */}
        </div>
    )
}

export default Abilities;
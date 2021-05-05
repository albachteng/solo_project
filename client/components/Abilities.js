import React, {useEffect, useState} from 'react';
import Ability from './Ability';

/* 

presentation component that displays 
the result of a random query to the dnd api 
for (fighter) abilities

*/ 

const Abilities = ({levels, displayState, classFeatureChoices, chooseFrom}) => {

    const [abilitiesArray, setAbilitiesArray] = useState([]);

    useEffect(() => {
        const classFeatures = levels.features || [];
        const classFeatureSelections = chooseFrom(
            classFeatureChoices.choice.choose, // a number
            classFeatureChoices.choice.from) // an array
        setAbilitiesArray([...classFeatures, ...classFeatureSelections  || []]);
    }, [levels, classFeatureChoices]);

    return( 
        <div id="abilities">
            <h2>Abilities</h2>  
            <ul>{abilitiesArray.map(ability => <Ability name={ability.name} url={ability.url}/>)}</ul>
            <button onClick={displayState}>Get abilities</button>
        </div>
    )
}

export default Abilities;
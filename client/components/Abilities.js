import React, {useEffect, useState} from 'react';

/* 

presentation component that displays 
the result of a random query to the dnd api 
for (fighter) abilities

*/ 

const Abilities = ({levels, displayState, classFeatureChoices, characterClass}) => {

    const [abilitiesArray, setAbilitiesArray] = useState([]);

    useEffect(() => {
        const classFeatures = levels.features || [];
        setAbilitiesArray([classFeatures.concat(classFeatureChoices || [])]);
    }, [levels, classFeatureChoices]);

    useEffect(() => {
        console.log(abilitiesArray);
    }, [abilitiesArray]);

    return(
        <div id="abilities">
            <h2>Abilities</h2>
            {abilitiesArray.map(ability => {
                return (
                    // TODO add unique keys for mapped abilities
                    <div className="ability">
                        <h4>{ability.name}</h4>
                        <p>{ability.desc}</p>
                    </div>
                )
            })}
            <button onClick={displayState}>Get abilities</button>
        </div>
    )
}

export default Abilities;
import React, { useEffect, useState } from 'react'; 

/* 

functional component that displays a single ability after the 
result of an API call for the descriptions

*/ 

const Ability = ({name, url, race, levels, characterClass}) => {

const [description, setDescription] = useState('');

useEffect(() => {
    fetch('https://www.dnd5eapi.co' + url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setDescription(data.desc[0]);
        });
}, [characterClass, race]);

    return(
        <div className="ability">
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Ability;
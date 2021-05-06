import React, { useEffect, useState } from 'react'; 

/* 

functional component that displays a single ability after the 
result of an API call for the descriptions

*/ 

const Ability = (props) => {

const [description, setDescription] = useState('');

useEffect(() => {
    fetch('https://www.dnd5eapi.co' + props.url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setDescription(data.desc[0]);
        });
}, []);

    return(
        <div id="ability">
            <h4>{props.name}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Ability;
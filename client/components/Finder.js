import React, {useState} from 'react';

/* 

functional component that consists of a text box, a save button

if it finds a character with the name you submitted, it will load it to the page

*/ 



const Finder = ({loadSavedCharacter}) => {

    const [name, setName] = useState('Speak their name...');

    const update = (e) => {
        setName(e.target.value);
    }
    
    const getCharacter = (name) => {
        fetch('http://localhost:3000/api', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name}),
        })
        .then(response => response.json())
        .then(data => loadSavedCharacter(data));
    }

    return(
        <div>
            <h3>Summon one from the depths...</h3>
            <input type="text" onChange={update} value={name}></input>
            <button onClick={() => getCharacter(name)}>heyo</button>
        </div>
    )
}

export default Finder;
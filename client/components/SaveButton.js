import React, {useState} from 'react';

/* 

functional component that saves the current state and posts it to the database along with the name you give it

*/ 

const SaveButton = ({saveCharacter}) => {

const [name, setName] = useState('Name your Fightr...');

const update = (e) => {
    setName(e.target.value);
}

    return(
        <div>
            <input onChange={update} type="text" value={name}></input>
            <button onClick={() => saveCharacter(name)}>Save this one...</button>
        </div>
    )
}

export default SaveButton;
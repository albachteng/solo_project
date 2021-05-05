import React, {Component, useEffect} from 'react';

/* 

stateless presentation component that displays 
the result of a random query to the dnd api 
for (fighter) abilities

*/ 

const Abilities = (props) => {

    // update abilities state after render?

    return(
        <div id="abilities">
            <h3>Abilities</h3>
            {props.abilities.map(ability => {
                return (
                    // TODO add unique keys for mapped abilities
                    <div className="ability">
                        <h4>{ability.name}</h4>
                        <p>{ability.desc}</p>
                    </div>
                )
            })}
            <button onClick={props.displayState}>Get abilities</button>
        </div>
    )
}

export default Abilities;
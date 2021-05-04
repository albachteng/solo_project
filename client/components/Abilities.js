import React, {Component} from 'react';

/* 

stateless presentation component that displays the result of a random query to the dnd api for fighter abilities

*/ 

const Abilities = (props) => {
    return(
        <div id="abilities">
            <h3>Abilities</h3>
            {props.abilities.map(ability => {
                return (
                    <div class="ability">
                    <h4>{ability.name}</h4>
                    <p>{ability.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Abilities;
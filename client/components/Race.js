import React from 'react';

/* 

functional component displays information on character race

*/ 

const Race = ({race}) => {
    return(
        <div id="race">
            <h3>This creature has power...</h3>
            <p>{race.age} {race.alignment} {race.size_description}</p>
        </div>
    )
}

export default Race;
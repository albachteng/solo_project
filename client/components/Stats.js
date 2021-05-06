import React, {Component} from 'react';

/* a stateless presentation component for displaying randomly generated stats */ 

const mod = (stat) => Math.floor(stat - 10 / 2);
const negative = (stat) => mod(stat) >= 0;

const Stats = (props) => {
  return(
    <div id="stats">

      <h4><strong>HP: <br></br>{props.stats.HP}</strong></h4>
      
      <h4><strong>AC: <br></br>{props.stats.AC}</strong></h4>

      <div>
        <h4><strong>STR: </strong><br></br>{props.stats.strength}</h4>
        <p>{ Math.floor((props.stats.strength - 10) / 2) }</p>
      </div>

      <div>
        <h4><strong>DEX: </strong><br></br>{props.stats.dexterity}</h4>
        <p>{ Math.floor((props.stats.dexterity - 10) / 2) }</p>
      </div>

      <div>
        <h4><strong>CON: </strong><br></br>{props.stats.constitution}</h4>
        <p>{ Math.floor((props.stats.constitution - 10) / 2) }</p>
      </div>

      <div>
        <h4><strong>INT: </strong><br></br>{props.stats.intelligence}</h4>
        <p>{ Math.floor((props.stats.intelligence - 10) / 2) }</p>
      </div>

      <div>
        <h4><strong>WIS: </strong><br></br>{props.stats.wisdom}</h4>
        <p>{ Math.floor((props.stats.intelligence - 10) / 2) }</p>
      </div>
      
      <div>
        <h4><strong>CHA: </strong><br></br>{props.stats.charisma}</h4>
        <p>{ Math.floor((props.stats.intelligence - 10) / 2) }</p>
      </div>
      
      <button onClick={props.generateStats}>Reroll Stats</button>
    </div>
      )
  }

export default Stats;
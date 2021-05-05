import React, {Component} from 'react';

/* a stateless presentation component for displaying randomly generated stats */ 

const Stats = (props) => {
  return(
    <div id="stats">
      <h2>Ability Scores</h2>
      <h3><strong>STR: </strong>{props.stats.strength}</h3>
      <h3><strong>DEX: </strong>{props.stats.dexterity}</h3>
      <h3><strong>CON: </strong>{props.stats.constitution}</h3>
      <h3><strong>INT: </strong>{props.stats.intelligence}</h3>
      <h3><strong>WIS: </strong>{props.stats.wisdom}</h3>
      <h3><strong>CHA: </strong>{props.stats.charisma}</h3>
      <button onClick={props.generateStats}>Roll Stats</button>
    </div>
      )
  }

export default Stats;
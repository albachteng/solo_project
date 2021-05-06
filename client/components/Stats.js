import React, {useEffect} from 'react';

/* a stateless presentation component for displaying randomly generated stats */ 

const mod = (stat) => Math.floor(stat - 10 / 2);
const negative = (stat) => mod(stat) >= 0;

const Stats = ({stats, characterClass, race, generateStats, updateStat}) => {

  // useEffect(() => {
  //   if (race.ability_bonuses) {
  //     race.ability_bonuses.forEach(bonusObject => {
  //       console.log('adding ', bonusObject.bonus, ' to ', bonusObject.ability_score.name);
  //       updateStat(bonusObject.ability_score.name, bonusObject.bonus);
  //     });
  //   };
  // }, [race]);


  return(
    <div id="stats">

      <h4><strong>HP: <br></br>{stats.HP}</strong></h4>
      
      <h4><strong>AC: <br></br>{stats.AC}</strong></h4>

      <div>
        <h4><strong>STR: </strong><br></br>{stats.STR}</h4>
        <p>{ Math.floor((stats.STR - 10) / 2) }</p>
      </div>

      <div>
        <h4><strong>DEX: </strong><br></br>{stats.DEX}</h4>
        <p>{ Math.floor((stats.DEX - 10) / 2) }</p>
      </div>

      <div>
        <h4><strong>CON: </strong><br></br>{stats.CON}</h4>
        <p>{ Math.floor((stats.CON - 10) / 2) }</p>
      </div>

      <div>
        <h4><strong>INT: </strong><br></br>{stats.INT}</h4>
        <p>{ Math.floor((stats.INT - 10) / 2) }</p>
      </div>

      <div>
        <h4><strong>WIS: </strong><br></br>{stats.WIS}</h4>
        <p>{ Math.floor((stats.WIS - 10) / 2) }</p>
      </div>
      
      <div>
        <h4><strong>CHA: </strong><br></br>{stats.CHA}</h4>
        <p>{ Math.floor((stats.CHA - 10) / 2) }</p>
      </div>
      
      <button onClick={generateStats}>Reroll Stats</button>
    </div>
      )
  }

export default Stats;
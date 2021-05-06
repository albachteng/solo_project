import React, {useState, useEffect} from 'react';
import Stats from './Stats';

const Skills = ({characterClass, stats}) => {

    const initialSkills = [
        {name: 'Acrobatics', bonus: 0, stat: 'DEX'},
        {name: 'AnimalHandling', bonus: 0, stat: 'WIS'},
        {name: 'Arcana', bonus: 0, stat: 'INT'},
        {name: 'Athletics', bonus: 0, stat: 'STR'},
        {name: 'Deception', bonus: 0, stat: 'CHA'},
        {name: 'History', bonus: 0, stat: 'CHA'},
        {name: 'Insight', bonus: 0, stat: 'CHA'},
        {name: 'Intimidation', bonus: 0, stat: 'CHA'},
        {name: 'Investigation', bonus: 0, stat: 'CHA'},
        {name: 'Medicine', bonus: 0, stat: 'CHA'},
        {name: 'Nature', bonus: 0, stat: 'CHA'},
        {name: 'Perception', bonus: 0, stat: 'CHA'},
        {name: 'Performance', bonus: 0, stat: 'CHA'},
        {name: 'Persuasion', bonus: 0, stat: 'CHA'},
        {name: 'Religion', bonus: 0, stat: 'CHA'},
        {name: 'SleightofHand', bonus: 0, stat: 'CHA'},
        {name: 'Stealth', bonus: 0, stat: 'CHA'},
        {name: 'Survival', bonus: 0, stat: 'CHA'},
    ];

    const [skills, setSkills] = useState(initialSkills);

    // useEffect(() => {
        
    // }, [characterClass])

    return(
        <div id="skills">
            <h3>You have developed a very specific set of skills...</h3>
            <ul>
                {skills.map((skill) => {
                    return <li>{skill.name}: {Math.floor((stats[skill.stat] - 10) / 2 )}</li>
                })}
            </ul>
        </div>
    )
}

export default Skills;
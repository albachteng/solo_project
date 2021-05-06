import React, {useState, useEffect} from 'react';

const Skills = ({characterClass}) => {

    const [skills, setSkills] = useState({});

    useEffect(() => {
        
    }, [characterClass])

    return(
        <div id="skills">
            <h3>Skills</h3>
            <p>skills go here</p>
        </div>
    )
}

export default Skills;
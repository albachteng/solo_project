import React, {useState, useEffect} from 'react';

/* 

functional component displays randomly selected starting equipment

*/ 

const Equipment = ({characterClass, chooseFrom}) => {

    const [equipmentArray, setEquipmentArray] = useState([]);

    useEffect(() => {
        const equipmentSelections = [];
        characterClass.starting_equipment_options.forEach(choice => {
            // starting_equipment_options is an array of objects
            equipmentSelections.push(...chooseFrom(
                choice.choose, // number to choose
                choice.from)); // array from which to choose
        });
        setEquipmentArray([...characterClass.starting_equipment, ...equipmentSelections])
    }, [characterClass]);

    // useEffect(() => {
    //     console.log(equipmentArray);
    // }, [equipmentArray]);

    return(
        <div id="equipment">
            <ul>
                {equipmentArray.map(item => {
                    if (item.equipment) {
                        return <li>{item.equipment.name}</li>;
                    }
                    if (item[0]) {
                        return <li>{item[0].equipment.name}</li>
                    }
                    else return
                })}
            </ul>
        </div>
    )
}

export default Equipment;
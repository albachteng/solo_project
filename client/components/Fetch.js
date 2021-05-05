/* 

this module contains all fetch request logic to prevent App.js from becoming unmanageable

*/ 
const baseUrl = 'https://www.dnd5eapi.co';
const apiUrl = '/api/';
const classesUrl = 'classes/';
const levelsUrl = '/levels/';

const fetchDndApi = async (queryString) => {
    const output = await fetch(baseUrl + queryString).then(response => response.json());
    return output; 
}

console.log(fetchDndApi('fighter'))

// const fetchCharacterClass = async (characterClassIndex) => {
//     fetch(baseUrl + apiUrl + classesUrl + characterClassIndex)
//         .then(response => response.json())
//         .then(data => this.setState((state, props) => {
//             return {...state, characterClass: data};
//         }))
// }




        

// fetch(baseUrl + 'classes/' + this.state.characterClass.index + '/levels/' + this.state.currentLevel)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.feature_choices.length > 0) {
//                     fetch('https://www.dnd5eapi.co' + data.feature_choices[0].url)
//                     .then(response => response.json())
//                     .then(data => {
//                         this.setState((state, props) => {
//                             return {...state, classFeatureChoices: data}
//                         });
//                     })
//                 }
//                 this.setState((state, props) => {
//                 return {...state, levels: data}
//                 })
//             })
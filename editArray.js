// Add, edit, delete
const characters = [
    { name: 'Crab', range: 'melee' },
    { name: 'Elephant', range: 'range' },
    { name: 'Sky', range: 'melee' }
];

const newCharacter = { name: 'Aurora', range: 'range' };
const newCharacters = [...characters, newCharacter];

console.log(characters);
console.log(newCharacters);
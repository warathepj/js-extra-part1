// Extract Object
const name = 'Jiant';
const pet = {
    name: 'Hakao',
    breed: 'Shizu',
    color: 'White'
};

const { name: rName, ...others } = pet;

console.log(rName);
console.log(others);

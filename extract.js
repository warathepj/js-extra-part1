// Extract Object
// const name = 'Jiant';
// const pet = {
//     name: 'Hakao',
//     breed: 'Shizu',
//     color: 'White'
// };

// const { name: rName, ...others } = pet;

// console.log(rName);
// console.log(others);

const scores = [92, 86, 72, 60, 51];

const [firstScore, secondScore, ...otherScores] = scores;

console.log(firstScore);
console.log(otherScores);


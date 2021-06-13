// Copy Array
// let originalPrices = [299, 599, 1299];

// let salePrices = [...originalPrices];
// salePrices[2] = 999;

// console.log('Original = ' + originalPrices);
// console.log('Sale = ' + salePrices);

let pet1 = {
    name: 'Hakao',
    age: 16
};

let pet2 = {...pet1};
pet2.name = 'Jiant';
pet2.age = 15;

console.log('Pet1 : ' + pet1.name + ' ' + pet1.age + 'yo');
console.log('Pet2 : ' + pet2.name + ' ' + pet2.age + 'yo');

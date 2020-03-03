const ages = [12,14,16,18];
const ages2 = [20,22,24,26];
const ages3 = [33,36,38,40];

//Previous style
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);
const allAges2 = [ages,ages2,ages3];
console.log(allAges2);

//ES6 style
allAges3 = [...ages,...ages2,...ages3];
console.log(allAges3);

const numbers = [150,450,250,460,780];


const maximum = Math.max(...numbers);
console.log(maximum);
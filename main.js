
let heightInCm = prompt('Wat is your height?');

let toInche = heightInCm/2.54;

let toFeet = Math.floor(toInche/12);
let remainInches = Math.round(toInche % 12)

console.log(`${toFeet} feet and ${remainInches} inches` );
console.log(`${toFeet}'${remainInches}`)


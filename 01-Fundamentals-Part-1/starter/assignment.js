let country = "South Africa";
let continent = "Aussie";
let southAfricaPopulation = "4000000";


const isIsland = false;
let language;
language = 'Afrikaans';

let halfPop = southAfricaPopulation/2;
let popPlusOne = southAfricaPopulation + 1;
let finlandPopulation = 6000000;
let averageCountryPopulation = 3000000;
let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
southAfricaPopulation = 10

if(southAfricaPopulation > finlandPopulation){
    console.log("True")
}else {
    console.log("False")
}

if(southAfricaPopulation > averageCountryPopulation){
    console.log(`${country}'s population is above average`)
}else {
    console.log(`${country}'s population is below average`)
}

let a = southAfricaPopulation == southAfricaPopulation
console.log(a)


// const now = 2037;
// const ageJonas = now -1991
// const ageSarah = now -2018

// console.log(now - 1991 > now - 2018);

// let x, y ;
// x = y = 25 -10 -5;
// console.log(x,y);

// const averageAge = (ageJonas + ageSarah) /2;
// console.log(ageJonas, ageSarah)
// console.log(averageAge)


let numNeighbours = 1;
if(numNeighbours === 1){
    console.log("Only 1 border");
}else if(numNeighbours > 1){
    console.log("More than 1 border");
}else if(numNeighbours == 0){
    console.log("No borders")
}


if(language == 'afrikaans' && population < southAfricaPopulation && isIsland == false){
    console.log("This is a safe place to live.")
}else{
    console.log("This is not a safe country to live in")
}




const langauge= 'chinese';
switch (langauge) {
  case 'chinese': 
  case 'mandarin': 
    console.log('MOST number of native speakers!');
    break;

    case 'spanish':
    console.log('2nd place in number of native speakers');
    break;

    case 'spanish':
    console.log('2nd place in number of native speakers');
    break;

    case 'english':
    console.log('3rd place');
    break;
    
    case 'hindi':
    console.log('3rd place');
    break;

    case 'arabic':
    console.log('3rd place');
    break;

    default:
    console.log('Great language too :D');
}


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / heightJohn **2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark , BMIJohn , markHigherBMI)

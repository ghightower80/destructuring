//object destructuring 1
console.log(numPlanets); 8
console.log(yearNeptuneDiscovered); 1846

//object destructuring 2
{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//object destructuring 3
Your name is Alejandro and you like purple
Your name is Melissa and you like green
Your name is undefined and you like green

//Array destructuring 1
Maya
Marisa
Chi

//Array destructuring 2
"Raindrops on roses"
"Whiskers on kittens"
["Bright copper kettles", "Warm woolen mittens", "Brown packages tied up with strings"]


//Array destructuring 3
[10, 30, 20]

//ES2015 object destructuring
const {a,b} = numbers.obj

//ES5 one-line array swap with destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]

//Race results
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
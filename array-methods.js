// const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


// planets.forEach(
//     planet => {
//         const planetEl = document.getElementById("planets")
//        const planetHeader = document.createElement("h3")
//        planetHeader.textContent = `${planet}`
//        planetEl.appendChild(planetHeader)
//     })  
// const capitolPlanets = planets.map(
//     function(capitol) {
//      planetEl = document.getElementById("planets")
//        const planetHeader = document.createElement("h3")
//        planetHeader.textContent = capitol.charAt(0).toUpperCase() + capitol.slice(1)
//        planetEl.appendChild(planetHeader)
//     })

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
// const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

// const capitolPlanets = planets.filter(
//     function(capitol) {
//         if (capitol.includes("e") || capitol.includes("E")){
//     planetEl = document.getElementById("planets")
//        const planetHeader = document.createElement("h3")
//        planetHeader.textContent = capitol.charAt(0).toUpperCase() + capitol.slice(1)
//        planetEl.appendChild(planetHeader)
//         }
//     })


// // Use the reduce method to create a sentence from the words in the following array
// const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

// const sentence = words.reduce(
//     (currentWord, nextWord) => currentWord + " " + nextWord
// )
// console.log(sentence);

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const totalIntegers = integers.reduce((first, second) => first + second)
//.sort((a,b) => {return b - a})
//.filter(currentInteger => currentInteger <= 19)                              
//.map(i => (i * 1.5)-1)

console.log(totalIntegers)


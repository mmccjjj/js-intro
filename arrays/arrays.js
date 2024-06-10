const beginnerPhrases = ["Arrays are hard!", "What's an index?", "I thought arrays start at 1, not 0."];

// Example: Accessing an element
console.log(beginnerPhrases[2]); // Outputs: "Arrays are hard!"

// Task: Print the second and third phrases to the console.

const wordArray = ["Fly", "apple", "moon", "paper", "facebook", "to", "ETH", "potato", "the", "Anitta", "coffee", "Nike", "me"];

// Task: Print the correct words from the array to reveal the hidden phrase, "Fly me to the moon"

console.log(wordArray[0]+ " "+ wordArray[12]+ " "+ wordArray[5]+ " "+ wordArray[8]+ " "+ wordArray[2])

const firstNames = ["Albert", "Elvis", "Abraham"]; 
const lastNames = [, "Lincoln", "Einstein", "Presley"];

//Task 1: Print Albert Einstein to the console
//Task 2: Print Elvis Presley to the console
//Task 3: Print Abraham Lincoln to the console

console.log(firstNames[0]+ " "+ lastNames[2]);

console.log(firstNames[1]+ " "+ lastNames[3]);

console.log(firstNames[2]+ " "+ lastNames[1]);

let techStack = ["HTML3", "CSS2", "JavaScript ES3"];

// NOTE: Just like you can change the value of a variable, you can also change individual elements in an array.

// Example: Upgrading a technology
techStack[0] = "HTML5"; 

// Task 1: Upgrade "CSS2" to "CSS3".
// Task 2: Upgrade "JavaScript ES3" to "JavaScript ES6".
// Task 2: Print techStack to console.

techStack[1]= "CSS3";
techStack[2]= "JavaScript ES6";

console.log(techStack)


let groceryStand = ["Fresh Carrots", "Rotten Apples", "Spoiled Milk", "Stale Bread", "Ripe Bananas"];

// To keep customers happy, you can change individual items in the array.

// Task 1: Replace "Spoiled Milk" with "Creamy Milk".
// Task 2: Replace "Stale Bread" with "Warm Bread".
// Task 3: Replace "Rotten Apples" with "Crisp Apples".


groceryStand[2]= "Creamy Milk";
groceryStand[3]= "Warm Bread";
groceryStand[1]= "Crisp Apples";

console.log(groceryStand)


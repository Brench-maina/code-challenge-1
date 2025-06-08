function calculateChaiIngredients(numberofCups){
    const Water = 200 * numberofCups; // 200 ml of water per cup
    const Milk = 50 * numberofCups;//50 ml of milk per cup
    const teaLeaves = 1 * numberofCups; // 1 tablespoon of tea leaves per cup
    const Sugar = 2 * numberofCups; // 2 teaspoons of sugar per cup

    console.log(`To make ${numberofCups} cups of chai, you will need:`);
    console.log(`Water: ${Water} ml`);
    console.log(`Milk: ${Milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${Sugar} teaspoons`);
    console.log(`\nEnjoy your Chai Bora!`);  
}
// prompt the user 
 const input = prompt("Karibu! How many cups of chai Bora would you like to make?");
// Convert the input to a number
const numberofCups = parseInt(input);
// Check if the input is a valid number
if (isNaN(numberofCups) || numberofCups <= 0) {
    console.log("Please enter a valid number of cups.");
} 
else {
    calculateChaiIngredients(numberofCups);
}
    
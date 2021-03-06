//Iterating Over Arrays
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");

//this works because we're declaring a counter variable called i (short for "index") that starts at 0, and increments by 1 at every step of a loop until it matches the length of our array
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}


//You can also use while loop too and get the same result
console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}

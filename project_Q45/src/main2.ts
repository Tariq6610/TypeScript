// Q14
let guests : string[] = ["farhan","waseem","waleed","kamran","sharukh"];
guests.forEach(person => {
    console.log(`${person}, I would like to invite you for a dinner! plz join us tomorrow`);
});


// here i am reusing the variable guest which is declared and defined in Q14
// Q15
guests = ["farhan","waseem","waleed","kamran","sharukh"];
guests.forEach(person => {
    console.log(`${person}, I would like to invite you for a dinner! plz join us tomorrow`);
});

let unarrivedGuest = 'kamran'
guests[guests.indexOf('kamran')] = 'Arsalan'

console.log('new List ===>')
guests.forEach(person => {
    console.log(` ${person}, I would like to invite you for a dinner! plz join us tomorrow`);
});


// Q16
let newGuestList : string[] = ["farhan","waseem","waleed","huzaifa","sharukh"];
newGuestList.unshift("Awais");
newGuestList.splice(2,0,"Arsalan");
newGuestList.push("Asad");
console.log("As I found bigges dinner table!")
newGuestList.forEach(person => {
    console.log(`${person}, I would like to invite you for a dinner! plz join us tomorrow`);
});


// here i am reusing the variable newguestList which is declared and defined in Q16
// Q17
while(newGuestList.length > 2){
    let removedGuest = newGuestList.pop()
    console.log(`I am Sorry ${removedGuest} I can't invite you for a dinner!`)
  }
  
  newGuestList.forEach(person => {
      console.log(`${person}, I would like to let you know that you are still invited for the dinner!`);
  });

newGuestList.pop()
newGuestList.pop()

console.log(newGuestList);


// Q18
let favPlaces : string[] = ["Landon","NYC","Istanbul","Madina","Warsaw","Melbourne"];
console.log("origional array : ")
console.log(favPlaces);

//sorted array, first got copy of origional array in order to keep original array intact
console.log("sorted array : ")
let sortedfavPlaces = favPlaces.slice();
console.log(sortedfavPlaces.sort());

//to check original array
console.log("origional array : ")
console.log(favPlaces);

//Reverse sorted array, first got copy of origional array in order to keep original array intact
console.log("Reverse sorted array")
let reverseFavPlaces = favPlaces.slice();
console.log(reverseFavPlaces.sort().reverse());

//to check original array
console.log("origional array : ")
console.log(favPlaces);

//Reversed the original array
console.log("Reversed the Original array")
console.log(favPlaces.reverse());

//Reversed back the original array
console.log("Reversed the Original array")
console.log(favPlaces.reverse());


//sorted the original array ascending
console.log("original array sorted ascending")
console.log(favPlaces.sort());

//sorted the original ascending order array to descending order
console.log("the original ascending sorted array has reversed to descending")
console.log(favPlaces.reverse());


// Q19
// used node.length method to print the length of the array
let MyGuestList : string[] = ["farhan","waseem","waleed","huzaifa","sharukh"];
console.log(`I am inviting ${MyGuestList.length} people to dinner`)


// Q20
let countries : string[] = ["Pakistan","India","China","Afghanistan","Iran"];
console.log(`countries i would like to visit ${countries}`)




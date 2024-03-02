// Q21
// let Myself = {
//     Name : "Tariq",
//     Age : 23,
//     'Highest Qualification' : "bachelors",
//     Batch : "1_wed-9To12"
// };
// console.log(Myself);


// Q22
// let IndexError : number[] = [1,2,3,4];
// let ind = 5;
// if(ind < IndexError.length){
//     console.log(IndexError[ind]);
// }else{
//     console.log("index is out of bounds")
// }


// Q23
// let country : string = "Pakistan";
// console.log("is country == 'Pakistan'? i predict True");
// console.log(country == "Pakistan");

// let iAm : string = "student"
// console.log(" iAm == 'student'? i predict True");
// console.log(iAm == "student");
// let city = "karachi";
// console.log("is city == 'karachi'? i predict True");
// console.log(city == "karachi");
// let continent : string = "Asia";
// console.log("is continent == 'Asia'? i predict True");
// console.log(continent == "Asia");
// let galaxy : string = "Milkyway";
// console.log("is galaxy == 'milkyway'? i predict True");
// console.log(galaxy == "Milkyway");
// let Earth : string = "oval";
// console.log("is Earth == 'flat'? i predict false");
// console.log(Earth == "flat");
// let largestContinent : string = "Asia";
// console.log("is largesContinent == 'Europe'? i predict False")
// console.log(largestContinent == "Europe");
// let neighbour : string = "China";
// console.log("is Neighbour == 'Bangladesh'? i predict False");
// console.log(neighbour == "Bangladesh");
// let hardestObject : string = "Diamond";
// console.log("is hardestObject == 'Steel'? i predict False");
// console.log(hardestObject == "Steel");
// let grass : string = "Green";
// console.log("is grass == 'Blue'? i predict False");
// console.log(grass == "Blue");



// Q24
// let str1 : string = "my name is M.tariq";
// let str2 : string = "My name is not traiq syed";
// console.log(str1 == str2)

// let str3 : string = "i live in karachi";
// let str4 : string = "i live in karachi";
// console.log(str3 == str4);

// let str5 : string = str2.toLowerCase()
// console.log(str2 == str5)

// console.log(str5 == str2.toLowerCase());

// let x = 25;
// let y = 30;
// console.log(x > 20);
// console.log(x < 25);
// console.log(x != y);
// console.log(y == 30);


// console.log(x == 25 && y != 30);
// console.log(x == 25 || y != 30);


// let nums : number[] = [1,2,3,5,6,7]

// let check4 = false;
// nums.forEach(num => {
//     if(num == 4){
//         console.log("4 is present in this array")
//         check4 = true;
//     }
// })

// if(check4 == false){
//     console.log(" 4 is not present in this array")
// }

// if (nums.includes(3)){
//     console.log("3 is present in this array")
// }else{
//     console.log("3 is not present in this array")
// }

// if (nums.includes(4)){
//     console.log("4 is present in this array")
// }else{
//     console.log("4 is not present in this array")
// }

// Q25
// let alien_color : string = "green"
// if(alien_color == "green"){
//     console.log("the player earned 5 points");
// }else if(alien_color !== "green"){
//         console.log("the player earned 10 points");  
// }



// // Q26
// let alien_color2 : string = "blue";
// if(alien_color2 == "green"){
//     console.log("the player earned 5 points")
// }else{
//     console.log("the player just earned 10 points")
// }


// Q27
// let alien_color3 : string = "yellow";
// if(alien_color3 == "green"){
//     console.log("the player just earned 5 points")
// }else if(alien_color3 == "yellow"){
//     console.log("the player just earned 10 points")
// }else if(alien_color3 == "red"){
//     console.log("the player just earned 15 points")
// }


// Q28
// let age : number = 23;
// if(age < 2){
//     console.log("the person is a baby")
// }else if(age >= 4 && age < 13){
//     console.log("the person is a kid")
// }else if(age >= 13 && age < 20){
//     console.log("the person is a teenager")
// }else if(age >= 20 && age < 65){
//     console.log("the person is an adult")
// }else if(age >= 65){
//     console.log("the person is an elder")
// }

// Q29
// let favFruits : string[] = ["grape","peach","pomegranate",]

// if(favFruits.includes("grape")){
//     console.log("i really like grapes")
// }

// if(favFruits.includes("apple")){
//     console.log("i really like apple")
// }

// if(favFruits.includes("peach")){
//     console.log("i really like peach")
// }

// if(favFruits.includes("pomegranate")){
//     console.log("i really like pomegranate")
// }

// if(favFruits.includes("pineapple")){
//     console.log("i really like pineapple")
// }


// Q30
// let userNames : string[] = ["Admin","Tariq","Asad","Waleed","Arsalan","Waseem"];
// userNames.forEach(person => {
//     if(person == "Admin"){
//         console.log(`Hello admin, would you like to see a status report?`)
//     }else{
//         console.log(`Hello ${person}, thank you for logging in again.`)
//     }
// }) 


// Q31
// let userNames2 : string[] = [];
// if(userNames2.length !== 0){
//     userNames2.forEach(person => {
//         if(person == "Admin"){
//             console.log(`Hello admin, would you like to see a status report?`)
//         }else{
//             console.log(`Hello ${person}, thank you for logging in again.`)
//         }
//     }) 
// }else{
//     console.log("we need do find some users first!")
// }


// Q32
// let currentUsers : string[] = ["Admin","Tariq","Waseem"];
// let NewUsers : string[] = ["Admin","Tariq","Asad","Waleed","Arsalan","Waseem"];
// let flag = false;
// for(let i = 0; i < NewUsers.length; i++){
//     for(let j = 0; j < currentUsers.length; j++){
//         if(NewUsers[i] == currentUsers[j]){
//             console.log("The name is already in the list Please enter a new User name")
//             flag = true;
//             break;
//         }
//     }
//     if(flag == false){
//         console.log(`The user name ${NewUsers[i]} is availble`)
//     }
//     flag = false;
// }

// Q2
let Myname : string = "TariqSyed";
console.log(`Hello ${Myname}, would you like to learn some python today?`);


// Q3
let Myname1 : string = "TariqSyed";
console.log(Myname1.toLocaleLowerCase());
console.log(Myname1.toUpperCase());

let str1 = Myname1.slice(0,1).toUpperCase();
let str2 = Myname1.slice(1).toLowerCase();
let titleCase = str1 + str2;
console.log(titleCase);


// Q4
console.log(`imran Khan once said, "Man strives, and success is bestowed by Allah"`);


// Q5
let message : string = `"Man strives, and success is bestowed by Allah."`;
let famous_person : string = "Imran Khan";
console.log(`${famous_person} once said, ${message}`);


// Q6
let Name : string = "\n\tImran Khan\t\n";
console.log(Name);

console.log(Name.trim());


// Q7
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);


// Q8
// Q7 and Q8 are similar

// Q10 as Question 10 is about writing a comment so it is my comment here I will describe the function of Q9 which is to store my favorite number then display it in the console. 
// Q9
let favoriteNumber : number = 7;
console.log(`My Favorite Number is ${favoriteNumber}`)


// Q11
let Names : string[] = ["Asad","Arsalan","kami","Niaz"];
for(let i = 0; i < Names.length; i++){
    console.log(Names[i]);
}


// Q12
let Names1 : string[] = ["Asad","Arsalan","kami","Niaz"];
let greetings : string = "Good evening";
for (let i = 0; i < Names.length; i++){
    console.log(greetings+", "+Names[i]);
}


// Q13
let favorites : string[] = ["suzuki Bike","Audi","Toyota","lexus","BMW"]
favorites.forEach(car => {
    console.log(`i would like to own a ${car} someday!`);
});







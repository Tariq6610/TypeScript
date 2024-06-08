// Q33
let ordinalNumbers : number[] = [1,2,3,4,5,6,7,8,9];
ordinalNumbers.forEach(num => {
    if(num == 1){
        console.log(`${num}st`)
    }else if(num == 2){
        console.log(`${num}nd`)   
    }else if(num == 3){
        console.log(`${num}rd`)
    }
    else{
        console.log(`${num}th`)
    }
});


// Q34
let pizzas :string[] = ["Dominos","KFC","Macdonalds"]
pizzas.forEach( pizza => {
    console.log(pizza);
})

pizzas.forEach( pizza => {
    console.log(`i like ${pizza}`);
})

console.log("Domino's offers customizable pizzas with various toppings and crust options, known for its efficient delivery service. With a commitment to quality and convenience, that's why Domino's remains a top choice for me and i love it.")


// Q35
let animals : string[] = ["Lion","Tiger","Cheetah","leopard"];
animals.forEach(cat => {
    console.log(cat);
});

animals.forEach(cat => {
    if(cat == "Lion"){
        console.log('\nIn the wild, the majestic lion commands attention with its regal presence. With its golden mane and powerful stature, the lion symbolizes strength and courage, ruling over the savannah with pride and authority.')
    }else if(cat == 'Tiger'){
        console.log('\nTigers, on the other hand, embody stealth and grace. With their striking orange coats adorned with bold black stripes, tigers are the epitome of feline elegance. They prowl through dense forests with silent determination, showcasing their unparalleled hunting prowess.')
    }else if(cat == 'Cheetah'){
        console.log('\nMoving swiftly across the African plains, the cheetah is a marvel of speed and agility. With its sleek, aerodynamic body and distinctive spots, the cheetah is built for acceleration, capable of reaching breathtaking speeds in pursuit of its prey.')
    }else if(cat == 'Leopard'){
        console.log('\nLastly, the leopard exudes an aura of mystery and intrigue. With its rosette-patterned coat blending seamlessly into the dappled shadows of the jungle, the leopard is a master of camouflage. Stealthy and elusive, it navigates its forested domain with unmatched cunning.')
    }
});

console.log("\nDespite their differences in appearance and behavior, lions, tigers, cheetahs, and leopards share several common traits. As apex predators, they occupy the upper echelons of the food chain, playing vital roles in maintaining the delicate balance of their respective ecosystems. Each possesses formidable physical capabilities, including sharp claws, keen senses, and powerful jaws, honed through centuries of evolutionary adaptation. Additionally, these magnificent big cats are revered across cultures for their beauty, strength, and inherent grace, captivating the hearts and imaginations of people around the world.")


// Q36
function make_shirt(size : string,text : string){
    console.log(`A shirt of size ${size} with a text ${text} has been made`)
}

make_shirt("medium","superMan")



// Q37
function make_shirt2(size : string = "large", text : string = "i love typeScript"): void{
        console.log(`A shirt of size ${size} with a text ${text} `)
     
}
make_shirt2();
make_shirt2("medium")
make_shirt2("small","i love python")


// Q38
function describe_city(city : string, country : string = "Pakistan",): void{
        console.log(`${city} is in ${country}`)
}

describe_city("karachi");
describe_city("Lahore");
describe_city("Peshawar");
describe_city("Landon","UK");


// Q39
function city_country(city : string, country : string){
    let cityCountry = city+","+country;
    return cityCountry
}

console.log(city_country("karachi","Pakistan"))
console.log(city_country("Lahore","Pakistan"))
console.log(city_country("Paris","France"))


// Q40
function make_album(ArtistName: string, AlbumTitle: string, tracks?: number){
    let obj: { name: string, Title: string, tracks?: number } = {
        name: ArtistName,
        Title: AlbumTitle
    };

    if (tracks) {
        obj['tracks'] = tracks;
    }

    return obj;
}

console.log(make_album("abc", "def"));
console.log(make_album('abc',"def", 4));


// Q41
let magicians = ["magician A","magician B","magician C","magician D"];

function show_magicians(arr : string[]){
    arr.forEach(magician => {
        console.log(magician)
    });
}

show_magicians(magicians);


// Q42
let magicians2 = ["magician A","magician B","magician C","magician D"];

function make_great(arr : string[]){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr[i] = "the Great "+arr[i]
    }
    return newArr;
}

show_magicians(make_great(magicians2));


// Q43
// functions and array has been used from Question 41 and 42
let newMagicians2 = make_great(magicians2);

show_magicians(magicians);
show_magicians(newMagicians2);


// Q44
let items1 :string[] = ["cheese","beef","kethcup","tomato","cucumber",]
let items2 :string[] = ["beef","sauce","tomato","cucumber","egg"]
let items3 :string[] = ["cheese","beef","kethcup","sauce","tomato","cucumber","egg"]

function make_sandwiche(arr : string[]){
    console.log("The sandwich has been ordered which consist of")
    arr.forEach(item => {
        console.log(item)
    });
}

make_sandwiche(items1);
make_sandwiche(items2);
make_sandwiche(items3);



// Q45
function make_car(
    manufacturer: string,
    model: string,
    ...options: [string, any][]
  ): { manufacturer: string; model: string; [key: string]: any } {
    let car: { manufacturer: string; model: string; [key: string]: any } = {
      manufacturer,
      model
    };
    
    options.forEach(([key, value]) => {
      car[key] = value;
    });
    
    return car;
  }
  
  console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
  console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));


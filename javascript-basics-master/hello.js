console.log("Hello from Javascript!");
console.log(this);
// array methods
// forEach, map, filter and reduce
const mock_data = require('./MOCK_DATA.json');

let strengths = [];  
mock_data.forEach((person) => {
    strengths.push(person.strength);
});

let mock_data_mapped = mock_data.map((person) => {
    return {
        full_name: `${person.first_name} ${person.last_name}`,
        country: person.country
    }
});
// console.log(mock_data_mapped[56]);

let mock_data_filtered = mock_data.filter((person) => {
    if(person.last_name) {
        return false;
    } else {
        return true;
    }
})

// console.log(mock_data_filtered.length);
// console.log(mock_data_filtered[24].first_name);



let mock_data_reduced=mock_data.reduce((total,currentValue,index)=>{
    console.log(index);
    console.log(total.strenghth);
    return{strength: total.strength + currentValue.strength}

})
console.log("Total Strength:")
console.log(JSON.stringify(mock_data_reduced))
// hoisting

// spread syntax
var NumberArray=[1,2,3,4,5,6,7,8,9,0];
function sumFunc(...numbers){
    console.log(...numbers);
}

total=0;
numbers.forEach(number=>{
    total=total+number;
})
console.log(total);

let numberStore=[0,2,2];
let newNumber=12;
//numberStore=[...numberStore,newNumber];
//console.log(numberStore);


// destructuring
let person={"firstname":"Django","age":"40","email":"hello123@ymail.com"}

let{firstname: name1,age: age1}=person;
console.log(name1);
console.log(age1);


function logNameandAge({firstname,age}){
    console.log('My name is ${firstname} and I am $[age] years old')
}
logNameandAge(person);


// closure






// currying






// callbacks, promises and async/await


function sendBackTheSumToPrint(number1,number2,callback){
    let sum=number1+number2;
    callback(sum);
}
function loggedSum(sum){
    console.log('sum is $[sum]');
}
sendBackTheSumToPrint(10,20.logTheSum)


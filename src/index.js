
import './style.scss';
let name = 'marten';
const pi = 3.14;

let obj = {
    name: 'asd',
    age: 20,
    pets: [
        {
            name: 'asd',
        }
    ],
    hello1(){
        //do someting cool
    },
    hello2: function(){
        //do someting cool
    },
    hello3: () => {

    }
};

let nums = [0,3,2,4,1,5,6,7,9,8];

nums.forEach(function(value){
    console.log(value);
});

nums.forEach((value, index) => console.log(value));

let powers = nums.map(value => value*value);
console.log(powers);

let sum = nums.reduce((prev,cur) => prev+cur);
console.log(powers);

let leftover = 5 % 3;
console.log(leftover)

let even = nums.filter(value =>  value%2==0)
console.log(even);
let sort = nums.sort();
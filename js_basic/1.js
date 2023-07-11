// line below is used to print on the console window
console.log('Namaste Dunia version4');

// let a = true;
// console.log(a);

// const num = 12;
// //num = 13;

// let lastName = 3;
// console.log(lastName);

// lastName = true;
// console.log(lastName);

// console.log(5 !== 3);

// let age = 27;
// let status = (age >= 18) ? 'Yes Vote' : 'No Vote';

// console.log(status);

// let marks = 12;

// if(marks >= 90) {
//     console.log('A');
// }
// else if(marks >= 80) {
//     console.log('B');
// }
// else if(marks >=70) {
//     console.log('C');
// }
// else if(marks >= 60) {
//     console.log('D');
// }
// else {
//     console.log('E');
//}

// let num = 1;

// switch(num) {
//     case 1: console.log('A');
//     break;
//     case 2: console.log('B');
//     break;
//     case 3: console.log('C');
//     break;
//     default: console.log('D');
// }


// for(let i = 1; i<=5; i=i+1) {
//     console.log("Babbar" + i);
// }

// let x = 1;

// while(x <= 5) {
//     console.log(x);
//     x++;
// }

let y = 1;

do {
    console.log(y);
    y++;
} while(y < 10);



console.log('Chaliye shuru karte hai ');

//object create
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

//factory function 

// function createRectangle(len, bre) {

//     const rectangle = {
//         length: len,
//         breadth:bre ,

//         draw() {
//             console.log('drawing rectangle');
//         }
// //     };
//     return rectangle;
// }

// let rectangleObj1 = createRectangle(5, 4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// Rectangle.

// //object creation using constrcutor function
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length', 'breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw= function() {
//     console.log('drawing');
// }`);

// //object creation using Rectangle1
// let rect = new Rectangle1(2,3);

// rect.length;

// console.log(rect);


// rectangle.length;
// rectangle.breadth;

// rectangle.draw();

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);

// let a = {value:10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);

let rectangle = {
    length:2,
    breadth:4
};

//for-in loop 
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }

// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


//object - colone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//Object Cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);

// console.log('Hello Jee');

// let lastName = 'Babbar' ;

// let firstName = new String('Love');

// let message = 
// `Hello ${lastName},

// Thanks for the Opportunity

// Regards,
// Babbar`;

// console.log(message);

// let words = message.split(' ');

// console.log(words);

// let date = new Date();


// let date2 = new Date('June 20 1998 07:15');

// let date3 = new Date(1998, 11, 20, 7);


// date3.setFullYear(1947);

// console.log(date3);

// let numbers = [1,4,5,7];

// console.log(numbers);

// //end -> push
// //beginning -> unshift

// //middle -> splice

// //Searching
// console.log(numbers);

// console.log(numbers.indexOf(9));

// //we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1) 
//     console.log("present");

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(4, 2) );


// let courses = [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

//console.log(courses);

//console.log( courses.includes( {no:1, naam:'Love'} ) );

// let course =  courses.find(course => course.naam === 'Kilvish');

// function(course) {
//     return course.naam === 'Love';
// }

// console.log(course);

// let numbers = [1,2,3,4,5,6,7];

// //end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(2, 1);

// // console.log(numbers);

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// //numbers = [];
// //numbers.length = 0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice();
// //let sliced = marks.slice(2);
// // let sliced = marks.slice(2,6);
// console.log(sliced);



// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', false, ...second ,'b', true];
// console.log(combined);

// //copy kaise create karu
// let another = [...combined];

// let arr = [10,20,30,40,50];

// // for(let value of arr) {
// //     console.log(value);
// // }

// arr.forEach(number=> console.log(number));



// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);


// let numbers = [5,10,4,40];

// numbers.sort();

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


// let numbers = [1,2,-1,-4];

// let filtered =  numbers.filter(value => value >= 0);

// console.log(filtered);


// let numbers = [7,8,9,10];
// console.log(numbers);

// let items = numbers.map(value => 'student_no' + value);

// console.log(items);

let numbers = [1,2,-6,-9];

let items = numbers
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(items);

// // console.log('kya haaal');


// //function call or invoke
// run();


// //function declaration
// function run() {
//     console.log('running');
// }




// //Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

// //Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };

// stand();

// let jump = stand;

// jump();

// stand2();


// let x = 1;
// x = 'a';

// console.log(x);


// function sum() {
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }

// // console.log(sum(1,2));
// //console.log(sum(1));
// // console.log(sum());
// //console.log(sum(1,2,,3,4,5));

// let ans = sum(1,2,2,3);
// console.log(ans);

//Rest Operator

// function sum(num, value, ...args) {
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


//Default Parameters
function interest(p,r=6,y=9) {
    return p*r*y/100;
}

//GETTER SETTER

//getter -> access properties
//setter -> change or mutate properties

//console.log(interest(1000,undefined, 8));

// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };



// console.log(person);


//issue - > read only


// console.log(person.fullName);
// try {
//     person.fullName = true;
// }
// catch (e) {
//     alert(e);
// }


// console.log(person.fullName);


// {
//     var a = 5;
// }
// console.log(a);

// function walk() {
//     var a = 5;
// }

// console.log(a);

// for(var i = 0; i<10; i++) {

// }

// console.log(i);

// if(true) {
//     var a = 5;
// }

// console.log(a);

// function a() {
//     const ab  = 5;
// }
// const ab = 5;
// function b() {
//     const ab = 5;
// }

//sorting 
// let a = [10,5,4,25];

// a.sort(function(a,b) {
//     return a-b;
// });

// console.log(a);

let arr = [-1,-2,-3,-4];
// let total = 0;

// for(let value of arr) 
//     total = total + value;

// console.log(total);


let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log("PRINTING TOTAL SUM:")
console.log(totalSum);








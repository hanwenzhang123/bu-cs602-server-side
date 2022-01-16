var data = [10, 20, 30];

var m1 = data.map(function (value) {
            return (2 * value);
        })

console.log("m1:", m1);

var m2 = data.map(value => 2 * value);

console.log("m2:", m2);

var data = [10, 20, 30];

var total1 = data.reduce(function (a, b) {
                return a + b;
            }, 0);

console.log("total1:", total1);

var total2 = data.reduce((a, b) => a + b, 0);

console.log("total2:", total2);

var data = [-5, 10, -15, 20, -25, 30];

var f1 = data.filter(function (value) {
    return (value > 0);
})

console.log("f1:", f1);

var f2 = data.filter(value => value > 0);

console.log("f2:", f2);

var data = [-5, 10, -15, 20, -25, 30];

var m3 = data.filter(value => value > 0)
            .map(value => 2 * value);

console.log("m3:", m3);
 
var p3 = data.filter(value => value > 0)
                .map(value => 2 * value)
                .reduce((a, b) => a * b, 1);

console.log("p3:", p3);


// Data
var scores = [  {'name': 'Alice',   grade: 90},
                {'name': 'Bob',     grade: 70},
                {'name': 'Charlie', grade: 100},
                {'name': 'Dave',    grade: 60},
                {'name': 'Ed',      grade: 80}
             ];

// Find Charlie

var result = scores.find(function (value) {
    return (value.name == 'Charlie');
});

console.log("Find Charlie (1):", result);

// or, With ES6 Syntax
var result = scores.find(value => {
    return (value.name == 'Charlie');
});

console.log("Find Charlie (2):", result);

// Find average grade

var total = scores.reduce(function (sum, value) {
    return (sum + value.grade);
}, 0);

// or, With ES6 Syntax
var total = scores.reduce((sum, value) => {
    return (sum + value.grade);
}, 0);

var average = total / scores.length;
console.log("Average:", average);

// Filter all data greater than average

var result = scores.filter(function (value) {
    return (value.grade > average);
});

// or, With ES6 syntax
var result = scores.filter(value => {
    return (value.grade > average);
});

console.log("Above Average data:");
console.log(result);

// Map all data to show offset from average

var result = scores.map(function(value) {
    return {"name": value.name, 
            "grade": value.grade,
            "offset": (value.grade - average)};
});

// or, With ES6 syntax
var result = scores.map(value => {
    return {"name": value.name, 
            "grade": value.grade,
            "offset": (value.grade - average)};
});

console.log("Mapped Data:");
console.log(result);

// Map only data above average to show offset
// Use filter followed by map

// With ES6 syntax
var result = scores.filter(value => {
    return (value.grade > average);
}).map(value => {
    return {"name": value.name, 
            "grade": value.grade,
            "offset": (value.grade - average)};
});

console.log("Filtered & Mapped Data:");
console.log(result);
    







// With Object destructuring


console.log("Object Destructuring...");


// Data
var scores = [  {'name': 'Alice',   grade: 90},
                {'name': 'Bob',     grade: 70},
                {'name': 'Charlie', grade: 100},
                {'name': 'Dave',    grade: 60},
                {'name': 'Ed',      grade: 80}
             ];

// Find Charlie

// With ES6 Syntax

var result = scores.find(value => {
    return (value.name == 'Charlie');
});

console.log("Find Charlie (2):", result);



// With ES6 Object Destructuring Syntax

var result = scores.find(  ({name}) => {
    return (name == 'Charlie');
});

console.log("Find Charlie (3):", result);





// Find average grade


// With ES6 Syntax

var total = scores.reduce((sum, value) => {
    return (sum + value.grade);
}, 0);

var average = total / scores.length;
console.log("Average:", average);


// With ES6 Object Destructuring Syntax

var total = scores.reduce((sum, {grade}) => {
    return (sum + grade);
}, 0);

var average = total / scores.length;
console.log("Average (2):", average);





// Filter all data greater than average


// With ES6 syntax

var result = scores.filter(value => {
    return (value.grade > average);
});

console.log("Above Average data:");
console.log(result);


// With ES6 Object Destructuring Syntax

var result = scores.filter( ({grade}) => {
    return (grade > average);
});

console.log("Above Average data (2):");
console.log(result);




// Map all data to show offset from average


// With ES6 syntax

var result = scores.map(value => {
    return {"name": value.name, 
            "grade": value.grade,
            "offset": (value.grade - average)};
});

console.log("Mapped Data:");
console.log(result);



// With ES6 Object Destructuring Syntax



var result = scores.map( ({grade, name}) => {
    return {"name":  name, 
            "grade": grade,
            "offset": (grade - average)};
});

console.log("Mapped Data (2):");
console.log(result);





// Map only data above average to show offset
// Use filter followed by map


// With ES6 syntax
var result = scores.filter(value => {
    return (value.grade > average);
}).map(value => {
    return {"name": value.name, 
            "grade": value.grade,
            "offset": (value.grade - average)};
});

console.log("Filtered & Mapped Data:");
console.log(result);
    


// With ES6 Object Destructuring Syntax


var result = scores.filter( ({grade}) => {
    return (grade > average);
}).map( ({name, grade}) => {
    return {"name":  name, 
            "grade": grade,
            "offset": (grade - average)};
});

console.log("Filtered & Mapped Data (2):");
console.log(result);
    

// function fn(param){
//     console.log("param is", param);
// }
// // value pass
// fn(10);
// fn("asdf");
// // reference pass value
// fn([1,2,3,4]);
// fn({name:"jasbir"});

// in js functions are treated as a variable
// variable -> assign value / address
// functions address -> variable assigns
// let a = [1,2,3,4];
// let b = a;
// console.log("b",b);
// a.pop();
// console.log("b",b);

// function expression
let exp = function(){
    console.log("I am function expresion");
}
// invokation
exp();

// IIFE Immediate Invoke Function Expression
(function fn(){
    console.log("I am IIFE will called immediate");
})();
// arrow function
let arrowFn = ()=>{
    console.log("I am arrow function");
}
arrowFn();
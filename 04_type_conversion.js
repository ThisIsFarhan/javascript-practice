// premitive types:
// String -> "", '', ``
// Boolean -> true, false
// Number -> 1, 1.0, 0, -1
// undefined -> undefined
// null -> type as well as value (used when you want to leave unassigned)


//function scoped
var str = "hello world"
str = "farhan"


//let and const are blocked scoped i.e, cant be accessed outside the block
// can be changed later on
let v = 5

// cannot be changed later on
const c = 10




x = "1234"
y = 4

console.log(Number(x) + y)

const x1 = "hahaha12"
console.log(parseInt(x1)) //extracts first number from string

const x2 = 1234
console.log(x2.toString() + "farhan")
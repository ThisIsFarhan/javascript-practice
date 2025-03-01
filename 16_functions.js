// function greet(name){
//     console.log(`Hello ${name}`)
// }

// const greet = function(name){
//     console.log(`Hello ${name}`)
// }

const greet = (name) => {
    console.log(`Hello ${name}`)
}

greet("Farhan")

function add(...numbers){
    let sum = 0
    for (let num of numbers){
        sum += num
    }
    return sum
}

const sum = add(1,2,3,4,5)
console.log(sum)
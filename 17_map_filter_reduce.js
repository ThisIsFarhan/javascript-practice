const numbers = [1,2,3,4,5]
const doubled = numbers.map((num)=>num*2)
console.log(doubled)

const users = [
    {name:"Farhan",age:20},
    {name:"Ali",age:30},
    {name:"Ahmed",age:20}
]
const names = users.map((users) => users.name)
console.log(names)

const numbers2 = [1,2,3,4]
const sum = numbers2.reduce((acc, num) => acc +num)
console.log(sum)

const even = numbers2.filter((num) => num%2===0)
console.log(even)
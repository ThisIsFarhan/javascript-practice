const [x, y, ...z] = [1, 2,3,4,5,6]

console.log(x)
console.log(y)
console.log(z)

const x_arr = [1,2,3,4,5]
const y_arr = [...x_arr] //deep copy of x_arr  
console.log(y_arr)
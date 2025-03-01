const arr = [1,2,3,true] //mutable

const arr1 = new Array(5) //empty array of size 5
console.log(arr1)

const abc = Array.from('abc')
console.log(abc)

abc[0] = 'A'
console.log(abc)
console.log(abc[abc.length-1])
abc.push('farhan')
console.log(abc)
abc.pop()
console.log(abc)
abc.shift()
console.log(abc)
abc.unshift("blah")
console.log(abc)
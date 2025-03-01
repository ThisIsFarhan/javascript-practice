do{
    console.log("Hello");
    break
}while(true)

while(true){
    console.log("Hello from while");
    break
}

for (let i = 0 ; i < 5 ; i++){
    console.log("Hello from for loop");
    break
}

const arr   = [12,3,4,5,5]
// for (let i = 0 ; i <arr.length ; i++){
//     console.log(arr[i]);
// }

for (let i of arr){
    console.log(i);
}

for (let [i,v] of arr.entries()){
    console.log(`${i} : ${v}`);
}
const mymap = new Map([[1,"one"],[2,"two"],[3,"three"]])
mymap.set(4,"four")
for (const [key,value] of mymap){
    console.log(key,value)
}
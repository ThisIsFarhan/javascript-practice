try{
    throw new Error("error occurred")
}catch(e){
    console.log(e)
}
finally{
    console.log("finally")
}
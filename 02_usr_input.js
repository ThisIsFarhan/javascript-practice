// npm init -y
//npm install prompt-sync

prompt_funct = require('prompt-sync')()

const name = prompt_funct("Enter your name")
console.log(`Hello ${name}`)
const args = process.argv.slice(2);
let num1 = parseInt(args[0]);
if(typeof num1==='number'){
console.log(`My number: ${num1}`);
}
else if(typeof num!=='NaN'){
    console.log("not a number")
}





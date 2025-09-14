const args =process.argv;

let num1 = Number(parseInt(args[2]))

if(Number.isInteger(num1)){
for(let i=0; i<num1; i++){
    console.log("C is fun");
}
}else{
    console.log("Missing number of occurences")
}
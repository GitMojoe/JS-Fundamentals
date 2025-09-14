const args =process.argv;

let num1 = Number(parseInt(args[2]))

if(Number.isInteger(num1)){
let i=0;
while(i<num1){
    console.log("C is fun");
    i++;
}

}else{
    console.log("Missing number of occurences")
}
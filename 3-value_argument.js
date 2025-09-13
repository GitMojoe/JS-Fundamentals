const args = process.argv.splice(2)
let num1 = args[0]
if(num1 == "string"){
console.log(num1);
}else{
    console.log("No argument")
}

const args = process.argv.splice(2)
let num1 = parseInt(args[0])
if(num1>1){
    for(let i =0; i<num1; i++){
    console.log("XX")
}
}else{
    console.log("Missing size")
}
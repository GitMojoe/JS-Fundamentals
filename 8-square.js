const args = process.argv.splice(2)
let num1 = parseInt(args[0])
if(num1.isInteger ===false || isNaN(num1)){
    console.log(`Missing size`)
} else {
    for(let i =0; i<num1; i++){
    console.log(`xx`)
}
}

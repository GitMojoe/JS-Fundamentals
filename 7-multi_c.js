// const args =process.argv.splice(2);

// let num1 = Number(parseInt(args[0]))

/*if(num1.isInteger===false || isNaN(num1)){
console.log("Missing number of occurences")

}else{
   num1 +=Number(parseInt(num1))
   args.forEach(element => {
      console.log("C is fun")
   });
}
*/

const x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  let i = 0;
  while (i < x) {
    console.log('C is fun');
    i++;
  }
}
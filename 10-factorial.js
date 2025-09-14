const x = Number(parseInt(process.argv[2]))

if(isNaN(x)){
    console.log(1)
}else{
const facto = (y) =>{
for(let i =0; i<x; i++){
    let num =1;
    num= num*i;
    console.log(num)
}
};

let z = facto(x);
//console.log(z)

}

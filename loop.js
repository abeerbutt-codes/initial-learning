console.log("i am learning loops")
//let a=1;
//for (let a=1;a<100;a++){
////console.log(a+1)
//}
let obj={
    name:"Abeer Butt",
    role:"student",
    teacher:"harry"

}
// for in loop is for keys in objects
for (const key in obj) {
    
    
    const element = obj[key];
    console.log(key,element)


}
//for of is used for iteratable data like arrays strings 
for (const iteratable of "Abeer But") {
    console.log(iteratable)
//output will be 
//a
//b
//e
//e.....like this 




}
//while loop
let w=7;
while (w<8) {
    console.log(w)
    w++;
}
//do while (1 bar chalni hi chalni ha)
//yha condtion false hona k bawajood b 1 bar code chla 
let d=10;

do {
    console.log(d)
    d++;
    
} while (d<8);
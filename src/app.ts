const person : {
    name : string;
    age : number
} = {
    name : "IPMAN",
    age : 19
}

let arr : string[] = ["ad"]

enum Role {ADMIN = 0}

console.log(Role.ADMIN)
 
const combine = function (number : number | string ){
    return number;
}

const refTest = function(){
    return 3;
}

combine(34);
combine("INAYAT");

let functionRef : (n1 : number , n2 : number) => number

functionRef = refTest;

function withb (n1 : number , n2 : number , cb : (n3 : number) => void){
    let res = n1 + n2;
    cb(res)
}

withb(3 , 5 , (res) => {
    console.log(res)
})


let useriput : unknown;
let userName : string;

useriput = 'MAX'
if (typeof useriput === 'string') {
    userName = useriput;   
}
// you  don't Know Waht type it is 

function errorGene(message : string , code : number) : never{
    throw {message : message , errcode : code}
    // here it breaks the code  it is usefu lwhen you make custom errorntypes
}

// if some function never returns any value then it is nenver type
errorGene("ERROR ACCURED" , 500);



let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

let numbers:number[] = []
let user : [number , string] = [1 , "Mosh"];

enum sizes {small = 0 , medium , large}

const mysize : sizes = sizes.medium;
console.log(mysize);

//Functions

function calculateTax (income : number , taxYear = 2020) {
    if (taxYear < 2022) {
        return income + 50
    }
    return income * 1.3
}

calculateTax(30_000)

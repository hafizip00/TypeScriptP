"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
let numbers = [];
let user = [1, "Mosh"];
var sizes;
(function (sizes) {
    sizes[sizes["small"] = 0] = "small";
    sizes[sizes["medium"] = 1] = "medium";
    sizes[sizes["large"] = 2] = "large";
})(sizes || (sizes = {}));
const mysize = sizes.medium;
console.log(mysize);
function calculateTax(income, taxYear = 2020) {
    if (taxYear < 2022) {
        return income + 50;
    }
    return income * 1.3;
}
calculateTax(30000);
//# sourceMappingURL=index.js.map
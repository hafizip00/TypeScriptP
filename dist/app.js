"use strict";
const person = {
    name: "IPMAN",
    age: 19
};
let arr = ["ad"];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
})(Role || (Role = {}));
console.log(Role.ADMIN);
const combine = function (number) {
    return number;
};
const refTest = function () {
    return 3;
};
combine(34);
combine("INAYAT");
let functionRef;
functionRef = refTest;
function withb(n1, n2, cb) {
    let res = n1 + n2;
    cb(res);
}
withb(3, 5, (res) => {
    console.log(res);
});
//# sourceMappingURL=app.js.map
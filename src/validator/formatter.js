
let str = " functionUp  ";

let trim = function () {
    let strTrim = str.trim();
    console.log(strTrim);
}

let changeToLowerCase = function () {
    let strToLowerCase = str.toLowerCase();
    console.log(strToLowerCase);
}

let changeToUpperCase = function () {
    let strToUpperCase = str.toUpperCase();
    console.log(strToUpperCase);
}

module.exports = {
    trim,
    changeToLowerCase,
    changeToUpperCase
}


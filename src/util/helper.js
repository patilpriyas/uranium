

let printDate = function () {
    let date = new Date();
    console.log("Todays Date is:" + date);
}

let printMonth = function () {
    let date = new Date();
    let month = date.getMonth()
    console.log("This month is:" + month);
}

let getBatchInfo = function () {
    console.log("Uranium, W3D3, the topic for today is Nodejs module system");
}

module.exports = {
    printDate,
    printMonth,
    getBatchInfo
}
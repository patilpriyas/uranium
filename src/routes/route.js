const express = require('express');
const router = express.Router();

//Module 1-logger
const logger = require('../logger/logger.js')
router.get('/test-me', function (req, res) {
    res.send('My first ever api!');
    logger.welcome();
});

//module 2-helper
const helper = require('../util/helper.js')
router.get('/test-me-helper', function (req, res) {
    res.send('My first ever api!');
    helper.printDate();
    helper.printMonth();
    helper.getBatchInfo();

});

//Module 3-formatter
const formatter = require('../validator/formatter.js')
router.get('/test-me-formatter', function (req, res) {
    res.send('My first ever api!');
    formatter.trim();
    formatter.changeToLowerCase();
    formatter.changeToUpperCase();
});

//Problem 4- package-lodash-chunk
router.get('/hello', function (req, res) {
    res.send('My first ever api!');
    splitArrayOfMonth();
    lastElementsOfArray();
    unionArrayOfNumber();
    arrayWithKeyValuePair();
});

let _ = require('lodash');
let splitArrayOfMonth = function () {
    const arrayOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const chunks = _.chunk(arrayOfMonth, 4);
    console.log(chunks);
    return chunks;
}

//Problem 4- package-lodash-tail
let lastElementsOfArray = function () {
    const arrayOfOddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const tails = _.tail(arrayOfOddNum);
    console.log(tails);
    return tails;
}

//problem 4 -package-lodash-union
let unionArrayOfNumber = function () {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 4, 5];
    const arr3 = [2, 7];
    const arr4 = [8, 9];
    const arr5 = [10, 6, 3];
    const unionArrayy = _.union(arr1, arr2, arr3, arr4, arr5);
    console.log(unionArrayy);
    return unionArrayy;
}

//problem 4 -package-lodash-frompairs
let arrayWithKeyValuePair = function () {
    const arrayOfObject = [["horror”,”The Shining"], ["drama”,”Titanic"], ["thriller”,”Shutter Island"], ["fantasy”,”Pans Labyrinth"]];
    const fromPairs = _.fromPairs(arrayOfObject);
    console.log(fromPairs);
}

module.exports = router;
// adding this comment for no reason
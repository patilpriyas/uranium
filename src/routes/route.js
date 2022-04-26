const express = require('express');
const router = express.Router();


// Problem 1
const movie = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Bartman begins', 'The Avengers'];
router.get('/movie', function (req, res) {
    res.send(movie);
});




// Problem 4
const movieObjArr = [
    { id: 1, name: 'Rang de basanti' },
    { id: 2, name: 'The shining' },
    { id: 3, name: 'Lord of the rings' },
    { id: 4, name: 'The Avengers' }
];
router.get('/film', function (req, res) {
    res.send(movieObjArr);
});


// Problem 5
const movieObj = [
    { id: 1, name: 'Rang de basanti' },
    { id: 2, name: 'The shining' },
    { id: 3, name: 'Lord of the rings' },
    { id: 4, name: 'The Avengers' }
];
router.get('/film/:id', function (req, res) {
    const movies = movieObj.find(m => m.id === parseInt(req.params.id));
    if (!movies)
        res.status(404).send("No movie exists with this id");
    res.send(movies);
});


// Problem 2
// router.get('/movies/:indexNumber', function (req, res) {
//     res.send(funMovie());
// });
// const movieArray = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Bartman begins', 'The Avengers'];
// const funMovie = function () {
//     for (let i = 0; i < movieArray.length; i++) {

//         const myelement = movieArray[i];
//         if (movieArray[i] == i) return movieArray
//         else (!movieArray)
//         res.status(404).send("The Movie not Present");
//         return myelement
//     }
//     console.log(myelement)

// }

// router.get('/missing', function (req, res) {
//     res.send(findMissing());
// });

// let array = [1,2,3,4,5,7,8,9];
// let count = array[array.length-1];
// let newArray = [];
// let findMissing = function(){
//     for (let i = 1; i<=count; i++){
//         if (array.indexOf(i) == -1)
//         newArray.push(i);
//     }
//     return newArray;
// }


// router.get('/missingNum', function (req, res) {
//     res.send(findNumber());
// });
// let array1 = [33,34,35,36,37,38,39];
// let findNumber = function () {
//     var n = array1.length;
//     var total = ((n + 2) * (n + 1)) / 2;
//     for (let i = 0; i < n; i++) {
//       total -= array1[i];
//     }
//     return total;
//   }



// //Module 1-logger

// const logger = require('../logger/logger.js');
// //module 2-helper
// const helper = require('../util/helper.js');
// //Module 3-formatter
// const formatter = require('../validator/formatter.js');

// router.get('/test-me', function (req, res) {
//     res.send('My first ever api!');
//     logger.welcome();
//     helper.printDate();
//     helper.printMonth();
//     helper.getBatchInfo();
//     formatter.trim();
//     formatter.changeToLowerCase();
//     formatter.changeToUpperCase();
// });

// //Problem 4- package-lodash-chunk
// router.get('/hello', function (req, res) {
//     res.send('My first ever api!');
//     splitArrayOfMonth();
//     lastElementsOfArray();
//     unionArrayOfNumber();
//     arrayWithKeyValuePair();
// });

// let _ = require('lodash');
// let splitArrayOfMonth = function () {
//     const arrayOfMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const chunks = _.chunk(arrayOfMonth, 3);
//     console.log(chunks);
//     return chunks;
// }
// //Problem 4- package-lodash-tail
// let lastElementsOfArray = function () {
//     const arrayOfOddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
//     const tails = _.tail(arrayOfOddNum);
//     console.log(tails);
//     return tails;
// }
// //problem 4 -package-lodash-union
// let unionArrayOfNumber = function () {
//     const arr1 = [1, 2, 3];
//     const arr2 = [1, 4, 5];
//     const arr3 = [2, 7];
//     const arr4 = [8, 9];
//     const arr5 = [10, 6, 3];
//     const unionArrayy = _.union(arr1, arr2, arr3, arr4, arr5);
//     console.log(unionArrayy);
//     return unionArrayy;
// }
// //problem 4 -package-lodash-frompairs
// let arrayWithKeyValuePair = function () {
//     const arrayOfObject = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
//     const fromPairs = _.fromPairs(arrayOfObject);
//     console.log(fromPairs);
// }


module.exports = router;
// adding this comment for no reason
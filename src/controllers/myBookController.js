
//const { count } = require("console")
const BookModel = require("../models/myBookModel.js")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const bookList = async function (req, res) {
    let allBooks = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allBooks })
}

const getBooksInYear = async function (req, res) {
    let yearBook = await BookModel.find({ year: req.body.year })
    res.send({ msg: yearBook })
}

const getParticularBooks = async function (req, res) {
    let data = req.body
    let particularBooks = await BookModel.find(data)
    res.send(particularBooks)
}

const getXINRBooks = async function (req, res) {
    let allBooks = await BookModel.find({
        $or: [{ 'prices.indianPrice': { $eq: "100INR" } }, { 'prices.indianPrice': { $eq: "200INR" } }, { 'prices.indianPrice': { $eq: "500INR" } }]
    })
    res.send({ msg: allBooks })
    // { ‘prices.indianPrice’ : { $in: [ “100INR” , “200INR”, 500INR” ] } }
}
const getRandomBooks = async function (req, res) {
    let allBooks = await BookModel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] })
    res.send({ msg: allBooks })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks

const { count } = require("console")
const BookModel= require("../models/booksSchema")
const authorSchema= require("../models/authorSchema")
const booksSchema= require("../models/booksSchema")

const createAuthor= async function (req, res) {
    let data= req.body
    let savedAuthor= await authorSchema.create(data)
    res.send({msg: savedAuthor})
}
const createBook= async function (req, res) {
    let data= req.body
    let savedBook= await booksSchema.create(data)
    res.send({msg: savedBook})
}
const allBooksList= async function (req, res) {
    const authorInfo = await authorSchema.find({author_name : "Chetan Bhagat"})
    const id= authorInfo[0].author_id
    const books = await booksSchema.find({author_id : id}).select({name:1})
    res.send({msg: books})
}


const updateBookPrice= async function (req, res) {
    const bookInfo = await booksSchema.find({name:"Two states"})
    const id= bookInfo[0].author_id
    
    const authorN = await authorSchema.find({author_id : id}).select({author_name:1, _id:0})
    const bookN = bookInfo[0].name
    const updatedPrice = await booksSchema.findOneAndUpdate({name:bookN},{price:100},{new:true}).select({price:1, _id:0})
    res.send({msg: authorN, updatedPrice})
}

const authorsName= async function (req, res) {
    const booksId = await booksSchema.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id= booksId.map(inp => inp.author_id)

    let temp=[]
    for(let i=0; i<id.length; i++)
    {
        let x = id[i]
        const author = await authorSchema.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    const authorName = temp.flat()
    res.send({msg: authorName})
}


module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.allBooksList= allBooksList
module.exports.updateBookPrice= updateBookPrice
module.exports.authorsName= authorsName

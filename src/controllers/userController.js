const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createNewBook = async function(req, res){
    let bookData = req.body
    let savedBookData = await UserModel.create(bookData)
    res.send({msg: savedBookData})
}

const getAllBookList = async function(req,res){
    let allBooks = req.body
    res.send({msg: allBooks})
}

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.createNewBook= createNewBook
module.exports.getAllBookList = getAllBookList
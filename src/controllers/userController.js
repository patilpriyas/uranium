const req = require("express/lib/request")
const UserModel= require("../models/userModel")


const createNewUser = async (req, res) => {
if(req.headers.isFreeAppUser == 'true'){
    let getData = req.body;
    getData.isFreeAppUser = true;

    let showData = await UserModel.create(getData);
    res.send({data: showData, status: true});
  }else{
    let getData = req.body;

    let showData = await UserModel.create(getData);
    res.send({data: showData, status: true});
  }
}

module.exports.createNewUser = createNewUser;
const axios = require("axios")

let createMeme = async function(req, res){
    try{
        let template_id = req.query.template_id
        let text0 = req.query.text0 
        let text1 = req.query.text1
        let username  = req.query.username
        let password   = req.query.password

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }

        let result = await axios(options)
        let data = result.data
        console.log(data)
        res.status(200).send({msg: data})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}


module.exports.createMeme = createMeme
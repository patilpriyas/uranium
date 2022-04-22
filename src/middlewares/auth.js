const jwt = require("jsonwebtoken");

const tokenValidation = function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        if (!token) return res.send({ status: false, msg: "token must be present" });
        let decodedToken = jwt.verify(token, "functionup-thorium");
        if (!decodedToken) return res.status(200).send({ status: false, msg: "aaaaaaa" });
        next();
    }
    catch(err){res.status(400).send({msg: "Error", error: err.message})}
}

const userValidation = function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"];
        let decodedToken = jwt.verify(token, 'functionup-thorium');
        let userToBeModified = req.params.userId;
        let userLoggedIn = decodedToken.userId;
        if (userToBeModified != userLoggedIn)
        return res.send({ status: false, msg: "user logged is not allowed to modify requested user's data" })
    }
    catch(err){res.status(403).send({msg: "Error", error: err.message})}
}

module.exports.tokenValidation = tokenValidation;
module.exports.userValidation = userValidation;

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens

  // If a token is present then decode the token with verify function
  // // verify takes two inputs:
  // // Input 1 is the token to be decoded
  // // Input 2 is the same secret with which the token was generated
  // // Check the value of the decoded token yourself

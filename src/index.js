const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect("mongodb+srv://priya:priya1122@cluster0.zscq3.mongodb.net/myDatabase",
{
    maxPoolSize: 50, 
    wtimeoutMS: 2500,
    useNewUrlParser: true
})
.then(  () => console.log("MongoDB is Connected"))
.catch(err => console.log(err))

app.use (
    function (req, res, next) {
        let dateTime = require('node-datetime');
        let dt = dateTime.create();
        let formatted = dt.format('Y-m-d H:M:S');
        console.log(formatted + " " + req.ip + " " + req.originalUrl);
        next();
  }
  );

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

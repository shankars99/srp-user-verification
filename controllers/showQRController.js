const express       = require('express');
const bodyParser    = require('body-parser');
const spawn         = require("child_process").spawn;
const show        = express.Router();
//creating express router

//using body parser to read values of fields(such as field name) in webpages
show.use(bodyParser.json());

//Displays homepage
show.route('/showQR')
.get((req,res,next) => {

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');
    res.sendFile('/showQR.html', {root: loc});
})
.post((req,res,next) => {
    console.log("Sending the QR");


    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');
    res.sendFile('/showQR.html', {root: loc});
})

module.exports = show;

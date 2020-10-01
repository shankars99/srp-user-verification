const express       = require('express');
const bodyParser    = require('body-parser');
const spawn         = require("child_process").spawn;
const signup        = express.Router();
global.name         ="";
//creating express router

//using body parser to read values of fields(such as field name) in webpages
signup.use(bodyParser.json());

//Displays homepage
signup.route('/signup')
.get((req,res,next) => {
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');
    res.sendFile('/signupUser.html', {root: loc});
})
.post((req,res,next) => {
    res.statusCode = 200;

    name = req.body.name;

    const pythonProcess = spawn('python',["pyScripts/qr-gen.py", req.body.name, req.body.aadharNum,
                                        req.body.dob, req.body.address, req.body.phone, req.body.email]);

    pythonProcess.stdout.on('data', function(data) {
        console.log(data.toString());
    });
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('showQR.html', {root: loc});
})

module.exports = signup;

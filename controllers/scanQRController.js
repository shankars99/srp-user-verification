const express       = require('express');
const bodyParser    = require('body-parser');
const spawn         = require("child_process").spawn;
const signup        = express.Router();
//creating express router

//using body parser to read values of fields(such as field name) in webpages
signup.use(bodyParser.json());

//Displays homepage
signup.route('/scanQr')
.get((req,res,next) => {
    res.statusCode = 200;

    console.log("Rendering the scan page");

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');
    res.sendFile('/scanQR.html', {root: loc});
})
.post((req,res,next) => {
    console.log("Creating the QR");
    const pythonProcess = spawn('python',["pyScripts/qr-gen.py", req.body.name, req.body.aadharNum,
                                        req.body.dob, req.body.addr, req.body.phone, req.body.email]);

    console.log("Sending image");
    pythonProcess.stdout.on('data', function(data) {
        console.log(data.toString());
    });

    res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Disposition': `attachment; filename=../models/rem.png`
    });

    res.sendFile('../models/rem.png', {root: loc});
})

module.exports = signup;

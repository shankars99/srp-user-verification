const express       = require('express');
const bodyParser    = require('body-parser');
const {PythonShell} = require('python-shell');
const spawn = require("child_process").spawn;

const signup          = express.Router();
//creating express router

//using body parser to read values of fields(such as field name) in webpages
signup.use(bodyParser.json());

//Displays homepage
signup.route('/signup')
.get((req,res,next) => {
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');
    res.sendFile('signupForm.html', {root: loc});
})
.post((req,res,next) => {
    res.statusCode = 200;

    const pythonProcess = spawn('python',["pyScripts/hello.py", req.body.name, req.body.age]);

    pythonProcess.stdout.on('data', function(data) {
        console.log(data.toString());
    });
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('signupForm.html', {root: loc});
})

module.exports = signup;

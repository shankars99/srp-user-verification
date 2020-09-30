const express     = require('express');
const bodyParser  = require('body-parser');
const home        = express.Router();

//using body parser to read values of fields(such as field name) in webpages
home.use(bodyParser.json());

//Displays homepage
home.route('/home')
.get((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('home.html', {root: loc});
})

module.exports = home;

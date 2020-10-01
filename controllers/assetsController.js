const express     = require('express');
const bodyParser  = require('body-parser');
const assets      = express.Router();

//using body parser to read values of fields(such as field name) in webpages
assets.use(bodyParser.json());
//Displays homepage

assets.route('/*')
.get((req,res,next) => {
    res.statusCode = 200;

    console.log(req.url + "\n");

    if(req.url.indexOf('.html') != -1){
        modifier = "text"
    }
    else if(req.url.indexOf('.css') != -1){
            modifier = "css";
    }
    else if(req.url.indexOf('.js') != -1){
        modifier = 'javascript';
    }

    res.setHeader('Content-Type', 'text/'+modifier);
    res.sendFile(req.url, {root: loc});
})

module.exports = assets;

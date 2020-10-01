const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
var routes       = require("./routes.js");
const app        = express();
const port       = 4000;

global.loc = "/home/shankar/git-repo/srp-user-verification/views";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(express.static('assets'))
app.use(express.static('images'))
app.use(express.static('models'))

//app.use(morgan('combined'))

routes(app);

app.listen(port, () => {
  console.log(`Application runnning on ${port}.`);
});

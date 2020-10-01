const express    = require('express');
const bodyParser = require('body-parser');
var routes       = require("./routes.js");
const app        = express();
const port       = 4000;

global.loc = "/home/shankar/git-repo/srp-user-verification/views";

app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.listen(port, () => {
  console.log(`Application runnning on ${port}.`);
});
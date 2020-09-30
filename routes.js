(function(){


    var homeController = require('./controllers/homeController');
    var signupController = require('./controllers/signupController');
    /*
    var showQRController = require('./controllers/showQRController');
*/
	module.exports = function(app){
        app.get("/home",homeController);
        app.all("/signup",signupController);
        /*
        app.get("/showQR",showQRController);
*/
  };
})();

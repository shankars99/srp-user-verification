(function(){
    var assetsController = require('./controllers/assetsController');
    var homeController = require('./controllers/homeController');
    var signupController = require('./controllers/signupController');
    var showQRController = require('./controllers/showQRController');

	module.exports = function(app){

        app.all("/home",homeController);
//        app.get("/home/*",homeController);
        app.all("/signup",signupController);
        app.get("/showQR",showQRController);
        app.get("/*",assetsController);

  };
})();

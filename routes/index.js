var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get hello world.*/
router.get('/helloworld',function(req,res,next){
	res.render('helloworld',{ title:'Hello world'});
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;


	 		console.log(db);
	 		console.log("Hello World");

   


   /*


    var collection = db.get('usercollection');
    /*collection.find({},{},function(e,doc){
        res.render('userlist', {
            'userlist' : doc
        });
    });*/

	res.render('helloworld',{ title:'Hello world'});


});

module.exports = router;

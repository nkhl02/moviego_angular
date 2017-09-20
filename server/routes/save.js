var express = require('express');
var movie=require('../model/Schema');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
 res.send("hello");
});
router.post('/',function(req,res){
//console.log(req.body.id);
//console.log(req.body.title);


var mo=new movie();
mo.vote_count=req.body.vote_count;
mo.id=req.body.id;
mo.vote_average=req.body.vote_average,
mo.title=req.body.title,
mo.poster_path=req.body.poster_path,
mo.overview=req.body.overview,
mo.release_date=req.body.release_date

mo.save(function(err,details){

	if(err){
		res.send("error occured");
	}
	else{
		res.send(details);
	}
})
});
module.exports = router;

var express = require('express');
var router = express.Router();
var Details=require('../model/Schema');
/* GET users listing. */
router.get('/',function(req,res){
	//console.log("Hello This is getting called.....**************************");
	Details.find({})
	.exec(function(err,result){
		if(err){
			res.send("error occured");
		}
		else
		{
			console.log(result);
			res.json(result);
		}
	})
});


module.exports = router;

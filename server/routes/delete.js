var express=require('express')
var Details=require('../model/Schema');
var router=express.Router();
router.get('/',function(req,res){
	res.send("hello");
});
router.delete('/:id',function(req,res){
	Details.findOneAndRemove({
		_id:req.params.id
	},function(err,results){
		if(err){
			res.send("error has been occured");
		}
		else{
			res.send("data deleted successfully");
		}
	})
});

module.exports = router;
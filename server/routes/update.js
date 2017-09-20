var express=require('express')
var Details=require('../model/Schema');
var router=express.Router();

router.get('/',function(req,res){
	res.send("hello");
});
router.put('/:id',function(req,res){
	Details.findOneAndUpdate(
	{id:req.params.id},
		{$set:{vote_average:req.body.vote_average}},function(err,results){
			if(err){
				res.send("error has been occured");

			}
			else{
				res.send("records updated successfully");
			}

		})
});
module.exports=router;

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var MovieSchema=new Schema({

	
vote_count:Number,
id:Number,
vote_average:Number,
title:String,
poster_path: String,
overview:String,
release_date:Date,
vote_Count:Number








// popularity:Number,
// poster_path:String,
// original_title:String,
// original_language:String,
// release_date:String,
// overview:String
});

module.exports=mongoose.model('moviedb',MovieSchema);
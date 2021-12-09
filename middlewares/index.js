exports.checkForProperData = (req,res,next)=>{
    if( req.body.first_name && req.body.last_name && req.body.age && req.body.field_of_study && req.body.password){
        next()
    }
    else{
        res.json({"Error":"Fields are missing !!"})
    }
}
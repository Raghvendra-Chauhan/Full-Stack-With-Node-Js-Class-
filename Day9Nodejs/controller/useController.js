const users = require('../module/useModule');


exports.getUsers =(req,res)=>{
    const clientQuery = req.query;
    console.log("clientQuery: ",clientQuery)
    res.json(users)
};
exports.addUser = (req, res) => {
    console.log("req: ",req.body);
    res.json(req.body);
};
exports.getUsersById =(req,res)=>{
    const userId = req.params.id;
    users.map(userDetail=>{
        console.log(userDetail);
        
       const id = userDetail['id'];
        if(id == userId){
        res.json(userDetail);
        }
    })
}



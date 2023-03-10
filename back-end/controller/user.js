const UserModel = require("../models/users");
const Constant = require("../constant/status");

function baseFind(config, res) {
  try {
    UserModel.findAll(config)
      .then((result) => {
        if (result.length != 0) {
          res.json(result).end();
        } else {
          res.json(Constant.NONE).end();
        }
      })
      .catch((err) => {
        res.json(err).end();
      });
  } catch (error) {
    throw new Error(error);
  }
}


// 获取指定数量的用户 

function getUserList(req,res,next){
    let {limit = 10} = req.query;
    baseFind({limit:+limit},res);
}

module.exports = {
    getUserList
}

var User = require('../models/user')

exports.user_list = function(req, res) {
  res.send("Not yet implemented")
}

exports.user_details = function(req, res) {
  res.send("Not yet implemented" + req.params.id)
}
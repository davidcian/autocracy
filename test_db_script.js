var async = require('async')

var User = require('./models/user')
var UserGroup = require('./models/user_group')

var mongoose = require('mongoose')
var mongoDB = 'mongodb+srv://test_user:mctestytest@cluster0.ve4io.mongodb.net/autocracy?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

var users = []
var usergroups = []

function userCreate(first_name, last_name, date_of_birth, cb) {
  userdetail = {
    first_name: first_name,
    last_name: last_name,
    date_of_birth: date_of_birth
  }

  var user = new User(userdetail)
  user.save(function(err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New User: ' + user)
    users.push(user)
    cb(null, user)
  })
}

function userGroupCreate(name, type, users, cb) {
  usergroupdetail = {
    name: name,
    type: type,
    users: users
  }

  var usergroup = new UserGroup(usergroupdetail)
  usergroup.save(function(err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New UserGroup: ' + usergroup)
    usergroups.push(usergroup)
    cb(null, usergroup)
  })
}

function createUsers(cb) {
  async.parallel([
    function(callback) {
      userCreate('John', 'Doe', '1995-06-21', callback)
    },
    function(callback) {
      userCreate('Jane', 'Doe', '1996-03-15', callback)
    },
    function(callback) {
      userCreate('Jack', 'Sparrow', '1648-07-20', callback)
    }
  ], cb)
}

function createUserGroups(cb) {
  async.parallel([
    function(callback) {
      userGroupCreate('Alpha Society', 'Democracy', [users[0], users[1]], callback)
    },
    function(callback) {
      userGroupCreate('Illuminati', 'Monarchy', [users[1], users[2]], callback)
    }
  ], cb)
}

async.series([
  createUsers,
  createUserGroups
],
function(err, results) {
  if (err) {
    console.log('Final error: ' + err)
  } else {
    console.log('Success!')
  }

  mongoose.connection.close()
})
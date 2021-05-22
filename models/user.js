var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema(
  {
    first_name: {type: String, required: true, maxLength: 100},
    last_name: {type: String, require: true, maxLength: 100},
    date_of_birth: {type: Date}
  }
)

UserSchema.virtual('full_name').get(function() {
  return this.first_name + ' ' + this.last_name
})

UserSchema.virtual('url').get(function() {
  return 'catalog/user/' + this._id
})

module.exports = mongoose.model('User', UserSchema)
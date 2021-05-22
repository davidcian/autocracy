var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserGroupSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100},
    type: {type: String, enum: ['Democracy', 'Monarchy'], default: 'Democracy'},
    users: [{type: Schema.Types.ObjectId, ref: 'User'}]
  }
)

UserGroupSchema.virtual('url').get(function() {
  return 'catalog/user_group/' + this._id
})

module.exports = mongoose.model('UserGroup', UserGroupSchema)
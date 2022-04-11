const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    id: { type: Number, required: false, unique: true },
    UserEmail: { type: String, required: true, unique: true },
    UserName: { type: String, required: true, unique: false },
    UserSurname: { type: String, required: true, unique: false },
    Manager: { type: mongoose.Schema.Types.ObjectId, required: false }
  },
  {
    collection: 'ColUser'
  }
);

module.exports = mongoose.model('User', userSchema);;

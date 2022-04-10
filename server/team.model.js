const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let teamSchema = new Schema(
  {
    id: { type: Number, required: false, unique: true },
    TeamName: String
  },
  {
    collection: 'ColTeam'
  }
);

module.exports = mongoose.model('Team', teamSchema);;

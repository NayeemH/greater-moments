const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const heroSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    saying: String
  },
  {
    collection: 'Hats'
  }
);

const Hero = mongoose.model('Hero', heroSchema);
console.log('hero.model.js hit', heroSchema);

module.exports = Hero;

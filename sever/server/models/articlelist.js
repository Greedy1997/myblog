var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new Schema({
  "articleid":String,
  "title":String,
  "content":String,
  "author":String,
  "imgurl":String,
  "hits":Number,
  "reporttime":String,
  "deltime":String,
  "creattime":String,
  "tagid":String
});

module.exports = mongoose.model('article',articleSchema);

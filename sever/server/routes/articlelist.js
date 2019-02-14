var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var article = require('../models/articlelist');

//连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/blog');

mongoose.connection.on("connected", function () {
  console.log("mongodb connected success")
});

mongoose.connection.on("error", function () {
  console.log("mongodb connected fail")
});

mongoose.connection.on("disconnected", function () {
  console.log("mongodb connected disconnected")
});

router.get("/", function (req, res, next) {
  article.find({}, function (err,doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      });
    }else{
      res.json({
        status: '200',
        msg: '',
        result:{
          count: doc.length,
          list: doc
        }
      })
    }
  })
});
module.exports = router;

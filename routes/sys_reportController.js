var express = require('express');
var router = express.Router();

var Sys_reportDao = require('../models/sys_reportDao');
var Sys_reportService = require('../services/sys_reportService');

router.post('/getSys_reportByIdAndYear', function (req, res) {
  var db = req.db;
  var id = req.body.id; 
  var year = req.body.year; 
  Sys_reportDao.getSys_reportById(db, id)
    .then(function (rows) {
      
      var tableName = rows[0].source_table;

      Sys_reportService.getResultByYear(db, tableName, year)
        .then(function(rows){
          res.send({ ok: true, rows: rows });
        })
        .catch(function(err){
          res.send({ ok: false, msg: err });
        })

    })
    .catch(function (err) {
      res.send({ ok: false, msg: err });
    });
  
});

module.exports = router;
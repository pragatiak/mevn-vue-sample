var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var qa = require('../models/Qa.js')

/* GET ALL qa */
router.get('/', function (req, res, next) {
  qa.find(function (err, products) {
    if (err) return next(err)
    res.json(products)
  })
})

/* GET SINGLE qa BY ID */
router.get('/:id', function (req, res, next) {
  qa.findById(req.params.id, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* GET SINGLE qa BY question */
// router.get('/:id', function (req, res, next) {
//   qa.findById(req.params.id, function (err, post) {
//     if (err) return next(err)
//     res.json(post)
//   })
// })

/* SAVE qa */
router.post('/', function (req, res, next) {
  qa.create(req.body, function (err, post) {
    if (err) return next(err)
    // console.log(post)
    // console.log(res)
    // res.status(err.status || 500)
    // res.json({
    //   message: err.message,
    //   error: err
    // })
    res.json(post)
  })
})

/* UPDATE qa */
router.put('/:id', function (req, res, next) {
  qa.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

/* DELETE qa */
router.delete('/:id', function (req, res, next) {
  qa.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router

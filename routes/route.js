const express = require('express');
const Router = express.Router()
const List = require('../Model/list')


Router.get('/lists', (req, res) => {
    List.find({}, function(err, lists) {
        if (err) {
            console.error('error get list ')
        } else {
            res.json(lists);
        }
    })
});

Router.post('/lists', (req, res) => {
    var neList = new List()
    neList.title = req.body.title
    neList.save(function(err, list) {
        if (err) {
            console.error('error list')
        } else {
            res.json(list);
        }
    })
});

module.exports = Router
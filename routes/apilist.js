const express = require('express');
const router = express.Router();
const LIST = require('../models/lists_model')
const TASK = require('../models/task_model')


router.get('/lists', (req, res) => {
    LIST.find({} ,function (err ,lists) {
        if (err) {
            console.error('error get lists')
        }else{
             res.json(lists);
        }
    })
});

router.post('/lists', (req, res) => {
     const newlist = new LIST()
     newlist.title = req.body.title
     newlist.save(function (err , list) {
        if(err){
            console.error('error add list')
        }else{
         res.json(list);
        }
        })
});



router.put('/lists/:id', (req, res) => {
   LIST.findByIdAndUpdate(req.params.id , {
       $set : { title : req.body.title}},
       {
        new: true
    },
   function (err , list) {
       if(err){
           console.error('error put')
       }else{
        res.json(list);
       }
   })
});

router.delete('/lists/:id', (req, res) => {
    LIST.findByIdAndDelete(req.params.id ,function (err , list) {
        if (err) {
            console.error('error delete')
        }else{
             res.json(list);
        }
    })
});
//TASK

router.post('/lists/:listId/task', (req, res) => {

    const newTask = new TASK()
    newTask.title  =req.body.title
    newTask._listId= req.params.listId
    newTask.save(function (err, task) {
        if(err){
            console.error(err)
        }else{
             res.json(task);
        }
    })
});
router.get('/lists/:listId/task', (req, res) => {
     TASK.find({_listId:req.params.listId} , function (err ,task) {
          res.json(task);
         
     })
});

router.put('/lists/:listId/task/:taskId', (req, res) => {
   TASK.findByIdAndUpdate({_id: req.params.taskId,_listId:req.params.listId},
    {$set : {title :req.body.title}},
    {
        new :true
    },
   function (err ,task) {
       if(err){
           console.log('error put')
       }else{
         res.json(task);       
       }
   })
});

router.delete('/lists/:listId/task/:taskId', (req, res) => {
    TASK.findByIdAndDelete({_id: req.params.taskId,_listId:req.params.listId},
     
    function (err ,task) {
          res.json(task);       
    })
 });

module.exports = router
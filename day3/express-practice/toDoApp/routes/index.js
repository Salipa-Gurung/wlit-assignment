var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
var router = express.Router();

const todos = require('../resources/todos');  //importing todos module

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('homepage', {todoList: todos});
});

router.get('/add-todo', function(req, res, next){
  res.render('addTodo');
});

router.post('/save-todo', function(req, res, next) {
  console.log(req.body);

  todos.push({...req.body, id:`00${ todos.length + 1}`})
  res.redirect('/home');
});

router.get('/edit-todo/:id', function(req, res, next){
  console.log('edited');
  const todo = todos.find(todo => todo.id === req.params.id)
  res.render('editTodo', {todo: todo});
});

router.post('/save-updated/:id', function(req, res, next){
  console.log('save update');
  const index = todos.findIndex(todo => todo.id === req.params.id);
  todos.splice(index, 1, {...req.body, id: index});
  res.redirect('/home');
});

router.get('/delete-todo/:id', function(req, res, next) {
console.log(req.params.id);
  const index = todos.findIndex(todo => todo.id === req.params.id)
  todos.splice(index, 1)
  res.redirect('/home')
});

module.exports = router;

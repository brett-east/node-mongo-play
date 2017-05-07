const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({})

// Todo.findOneAndRemove({_id: '590ed135e550136bc4d6c269'}).then(() => {});

// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('590ed135e550136bc4d6c269').then((todo) => {
  console.log(todo);
});

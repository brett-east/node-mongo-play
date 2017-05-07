const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '590ebb059b5d9c4ffabf7170aa';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((err) => {
//   console.log(err);
// })

// query a user, findbyid, works no user, user found, print any errors
var id = '590e98c43a82cc67f6b2b3e8';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('There is no user');
  }
  console.log(`Your user is ${user}`);
}).catch((err) => {
  console.log('There is an error with that ID', err);
});

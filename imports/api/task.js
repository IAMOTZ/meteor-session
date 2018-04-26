import { Mongo } from 'meteor/mongo';

const Tasks = new Mongo.Collection('tasks');

console.log(Tasks.find({}).fetch());

export default Tasks;
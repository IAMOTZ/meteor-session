import React from 'react';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Tasks from '../api/task';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tasks: Tasks.find({}).fetch()
    }
  }


  render() {
    return (
      <div className="cont_principal">
        <div className="cont_centrar">

        <Header />
        <AddTask />
        <TaskList />

        </div>
      </div>
    );
  }
}

export default App;
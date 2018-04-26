import React from 'react';
import Task from './Task';

class List extends React.Component {
  render() {
    return (
      <div className="cont_princ_lists">
        <ul>
          <Task />
        </ul>
      </div>
    )
  }
}

export default List;

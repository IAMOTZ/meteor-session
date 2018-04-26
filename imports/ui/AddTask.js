import React from 'react';
import Tasks from '../api/task';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      title: '',
      description: '',
      type: 'public'
    }
  }

  addTask = () => {
    const { date, title, description, type } = this.state;
    Tasks.insert({
      // date,
      // title,
      // description,
      // type,
      // createdAt: new Date(), // current time
      name: 'tunmise',
    });
  }

  getInput = (event) => {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state)
  }

  render() {
    return (
      <div className="cont_crear_new">
        <table className="table">
          <tbody>
            <tr>
              <th>Type</th>
              <th>Title</th>
              <th>Date</th>
            </tr>
            <tr>
              <td>
                <select name="type" id="action_select" onChange={this.getInput}>
                  <option value="public">PUBLIC</option>
                  <option value="private">PRIVATE</option>
                </select>
              </td>
              <td>
                <input name="title" type="text" className="input_title_desc" onChange={this.getInput} />
              </td>
              <td>
                <input name="date" type="date" onChange={this.getInput} />
              </td>
            </tr>
            <tr>
              <th className="titl_description">Description</th>
            </tr>
            <tr>
              <td colspan="3">
                <input type="text" name="description" className="input_description" onChange={this.getInput} required />
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <button className="btn_add_fin" onClick={this.addTask}>ADD</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default AddTask;

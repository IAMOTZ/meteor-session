import React from 'react';


class Task extends React.Component {
  render() {
    return (
      <li className="list_shopping li_num_0_1">
        <div className="col_md_1_list">
          <p>SHOPPIGN</p>
        </div>
        <div className="col_md_2_list">
          <h4>BUY COFFEE BEANS</h4>
          <p>DODIDONE COFFEE STORE</p>
        </div>
        <div className="col_md_3_list">
          <div className="cont_text_date">
            <p>12/4/2015</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Task;

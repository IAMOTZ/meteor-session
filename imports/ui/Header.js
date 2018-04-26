import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickTracker: 0
    }
  }

  addNew = () => {
      if (this.state.clickTracker % 2 == 0) {
        document.querySelector('.cont_crear_new').className = "cont_crear_new cont_crear_new_active";

        document.querySelector('.cont_add_titulo_cont').className = "cont_add_titulo_cont cont_add_titulo_cont_active";
        this.state.clickTracker++;
      } else {
        document.querySelector('.cont_crear_new').className = "cont_crear_new";
        document.querySelector('.cont_add_titulo_cont').className = "cont_add_titulo_cont";
        this.state.clickTracker++;
      }
  }
  
  render() {
    return (
      <div className="cont_todo_list_top">
        <div className="cont_titulo_cont">
          <h3>THINGS TO DO</h3>
        </div>
        <div className="cont_add_titulo_cont">
          <a href="#e" onClick={this.addNew}>
            <i className="material-icons"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Header;

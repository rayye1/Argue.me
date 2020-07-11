import React from 'react';

import './RoomModal.css'

class roomModal extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements["topic"].value;
    const numDebaters = form.elements["num"].value;
    this.props.addRoom(topic, numDebaters);
    form.reset();
    this.props.handleClose();
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <span class="close" onClick={this.props.handleClose}>&times;</span>
          <h2>Create Room</h2>
          <form onSubmit={this.formSubmit}>
              {/*<input type="text" placeholder="User Name" name="title" id="topic" className="inputBox" required />*/}
              <input type="text" placeholder="Topic" name="title" id="topic" className="inputBox" required />
              <select className="num-people" id="num">
                  <option disabled>Number of People</option>
                  <option selected>2</option>
                  <option>4</option>
                  <option>6</option>
                  <option>8</option>
              </select> <br/>
              <input style={{margin: "5%"}} type="submit" value="Create"/>
          </form>
        </section>
      </div>
    )
  }

}

export default roomModal 
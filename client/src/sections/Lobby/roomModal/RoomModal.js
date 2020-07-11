import React from 'react';

import './RoomModal.css'

const roomModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
            <span class="close" onClick={handleClose}>&times;</span>
            <h2>Create Room</h2>
            <input type="text" placeholder="User Name" name="title" className="inputBox" required />
            <input type="text" placeholder="Topic" name="title" className="inputBox" required />
            <select className="num-people">
                <option>Number of People: 2</option>
                <option>Number of People: 4</option>
                <option>Number of People: 6</option>
                <option>Number of People: 8</option>
            </select> <br/>
            <div className="radio-buttons">
                <label>
                    <input type="radio" value="option1" name="side" />
                        For
                </label>
                <label>
                        <input type="radio" value="option2" name="side" />
                        Against
                </label>
            </div>
            <button style={{margin: "5%"}} onClick={handleClose}>Create</button>
        </section>
      </div>
    )
  }

export default roomModal 
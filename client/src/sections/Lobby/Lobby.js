import React from 'react';

import RoomModal from './roomModal/RoomModal'

import './Lobby.css'

class Lobby extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    showModal = () => {
        this.setState({show: true})
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render () {
        return (
            <div className="outsideContainer">
                <h1>Argue.Me</h1>
                <div clasName="topSection">
                    <button onClick={this.showModal}>New Room</button>
                    <select className="role-selection">
                        <option>Debater</option>
                        <option>Judge</option>
                        <option>Spectator</option>
                    </select>
                    <RoomModal show={this.state.show} handleClose={this.hideModal} />
                </div>
            </div>
        )
    }
}

export default Lobby
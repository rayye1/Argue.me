import React from 'react';

import RoomModal from './roomModal/RoomModal'

import './Lobby.css'

class Lobby extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            room: []
        }

        this.addRoom = this.addRoom.bind(this);
    }

    showModal = () => {
        this.setState({show: true})
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    addRoom(topic, host, numDebaters) {
        this.setState(prevState => ({
            room : [...prevState.room, { topic, host, numDebaters }]
        }));
    }

    render () {
        return (
            <div className="outsideContainer">
                <h1>Argue.Me</h1>
                <div className="topSection">
                    <button onClick={this.showModal}>New Room</button>
                    <select className="role-selection">
                        <option>Debater</option>
                        <option>Judge</option>
                        <option>Spectator</option>
                    </select>
                    <RoomModal show={this.state.show} handleClose={this.hideModal} addRoom={this.addRoom} />
                    <table className="myTable">
                        <thead>
                            <th>Topic</th>
                            <th>Host</th>
                            <th># of Debaters</th>
                            <th>Join Room</th>
                        </thead>
                        <tbody>
                            {this.state.room.map((room) => {
                                return (
                                    <tr>
                                        <td>{room.topic}</td>
                                        <td>{room.host}</td>
                                        <td>{room.numDebaters}</td>
                                        <button>Join Room</button>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Lobby
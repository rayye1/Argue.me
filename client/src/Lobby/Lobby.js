import React from 'react';

import RoomModal from './roomModal/RoomModal'
import {Link} from 'react-router-dom'

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

    addRoom(topic, numDebaters) {
        this.setState(prevState => ({
            room : [...prevState.room, { topic, numDebaters }]
        }));
    }

    render () {
        return (
            <div className="outsideContainer">
                <h1 className="heading">Argue.Me</h1>
                <div className="topSection">
                    <button onClick={this.showModal} className="newRoom">New Room</button>
                    <RoomModal show={this.state.show} handleClose={this.hideModal} addRoom={this.addRoom} />
                    <table className="myTable">
                        <thead>
                            <th>Topic</th>
                            <th>Host</th>
                            <th># of Debaters</th>
                            <th>Join Room</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="4">
                                <div className="scrollit">
                                    {this.state.room.map((room) => {
                                        return (
                                                <tr>
                                                    <td style={{width: '22vw'}}>{room.topic}</td>
                                                    <td style={{width: '22vw'}}>Temp Host</td>
                                                    <td style={{width: '22vw'}}>{room.numDebaters}</td>
                                                    <Link to={`/chat?room=${room.topic}`/*Dummy Link*/}> 
                                                        <button className="join-room" style={{width: '22vw'}}>JOIN</button>
                                                    </Link>
                                                </tr>
                                        );
                                    })}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Lobby
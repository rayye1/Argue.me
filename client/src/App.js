import React from 'react'

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Lobby from './sections/Lobby/Lobby'
import Chat from './sections/Chat'

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Lobby} />
            <Route path="/Chat" component={Chat} /> {/* Depending on what Chat is called */}
        </Router>
    )
}

export default App;
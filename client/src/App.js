import React from 'react'

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Lobby from './Lobby/Lobby'

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Lobby} />
            {/*<Route path="/chat" component={} />*/} 
        </Router>
    )
}

export default App
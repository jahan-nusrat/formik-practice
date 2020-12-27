import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import routes from './routes'

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    {
                        routes.map((route, idx) => {
                            return (
                                <Route
                                    key = {idx}
                                    path = {route.path}
                                    name = {route.name}
                                    component = {route.component}
                                    exact = {route.exact}
                                />
                            ) 
                        })
                    }
                </Switch>
            </Router>
        </div>
    )
}

export default App

import axios from "axios"
import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from "./components/Home"
import CreateServer from "./components/server/CreateServer"
import ExploreServers from "./components/server/ExploreServers"
import PrivateRoute from "./components/utils/PrivateRoute"
import { UserContext } from "./components/utils/UserContext"

const App = () => {
  const getToken = () => {
    const token = localStorage.getItem("token")
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token
      return true
    } else {
      delete axios.defaults.headers.common["Authorization"]
      return false
    }
  }

  const [isAuth, setIsAuth] = useState(getToken())

  return (
    <UserContext.Provider value={{ isAuth, setIsAuth }}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" authed={isAuth} component={Home} />
          <PrivateRoute
            exact
            path="/createserver"
            authed={isAuth}
            component={CreateServer}
          />
          <PrivateRoute
            exact
            path="/explore"
            authed={isAuth}
            component={ExploreServers}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App

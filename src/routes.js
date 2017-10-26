import React from 'react'
import { Route } from 'react-router'
import Connect from './containers/Connect'
import Home from './containers/Home'

export default
<Route>
    <Route path="/" component={Connect} />
    <Route path="/home" component={Home} />
</Route>

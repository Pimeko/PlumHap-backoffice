import React from 'react'
import { Route } from 'react-router'
import Connect from './containers/Connect'
import Statements from './containers/Statements'
import Activities from './containers/Activities'
import AdminPanel from './containers/AdminPanel'

export default
<Route>
    <Route path="/" component={Connect} connected="false" />
    <Route path="/statements" component={Statements} connected="true"/>
    <Route path="/activities" component={Activities} connected="true" />
    <Route path="/admin" component={AdminPanel} connected="true" />
</Route>

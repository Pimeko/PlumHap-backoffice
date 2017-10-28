import React from 'react'
import { Route } from 'react-router'
import Connect from './containers/Connect'
import Statements from './containers/Statements'
import Statement from './containers/Statement'
import StatementCreator from './containers/StatementCreator'
import Activities from './containers/Activities'
import AdminPanel from './containers/AdminPanel'

export default
<Route>
    <Route path="/" component={Connect} />
    <Route path="/statements" component={Statements} />
    <Route path="/statements/:id" component={Statement} />
    <Route path="/statement-creator" component={StatementCreator} />
    <Route path="/activities" component={Activities} />
    <Route path="/admin" component={AdminPanel} />
</Route>

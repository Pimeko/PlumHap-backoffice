import React from 'react'
import { Route } from 'react-router'
import Connect from './containers/Connect'

import RequiredAuth from './containers/RequiredAuth'

import Statements from './containers/Statements'
import Statement from './containers/Statement'
import StatementCreator from './containers/StatementCreator'

import Activities from './containers/Activities'
import Activity from './containers/Activity'
import ActivityCreator from './containers/ActivityCreator'
import Admin from './containers/Admin'

export default
<Route>
    <Route path="/" component={Connect} />

    <Route path="/statements" component={RequiredAuth(Statements)} />
    <Route path="/statements/:id" component={RequiredAuth(Statement)} />
    <Route path="/statement-creator" component={RequiredAuth(StatementCreator)} />
    <Route path="/activities" component={RequiredAuth(Activities)} />
    <Route path="/activities/:id" component={RequiredAuth(Activity)} />
    <Route path="/activity-creator" component={RequiredAuth(ActivityCreator)} />
    <Route path="/admin" component={RequiredAuth(Admin)} />

</Route>

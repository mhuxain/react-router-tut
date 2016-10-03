import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Repos from './Repos'
//import Repo from './Repo'
import Home from './Home'
import NotFound from './NotFound'

module.exports = (
  <Route path="/" component={App}>

// home path routes
    <IndexRoute component={Home}/>

// this is a comment
    <Route path="repos" component={Repos}>
      <Route path=":userName/:repoName" component={Repos}></Route>
    </Route>


    <Route path="/about" component={About} />

    <Route path='*' component={NotFound} />

  </Route>

)

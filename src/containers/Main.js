import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IndexPage from '../views/IndexPage'
import CervezasPage from '../views/CervezasPage'
import CervezaPage from '../views/CervezaPage'
import ContactPage from '../views/ContactPage'
import NoMatch from '../views/NoMatchPage'
import './Main.css'

const Main = () => (
  <main>
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/cervezas" exact component={CervezasPage} />
      <Route path="/cervezas/:id" component={CervezaPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NoMatch} />
    </Switch>
  </main>
)

export default Main

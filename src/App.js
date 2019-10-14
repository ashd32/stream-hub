import React from 'react';
import classes from './App.module.scss';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Form from './containers/Form/Form'
import ChooseLayout from './containers/ChooseLayout/ChooseLayout'
import asyncComponent from './hoc/asyncComponent/asyncComponent'

function App() {
  library.add(fab)

  const asyncDouble = asyncComponent(() => {
    return import('./containers/Layouts/Double/Double');
  })

  const asyncTriple = asyncComponent(() => {
    return import('./containers/Layouts/Triple/Triple');
  })

  const asyncQuad = asyncComponent(() => {
    return import('./containers/Layouts/Quad/Quad');
  })

  return (
    <div className={classes.App}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/choose-layout" exact component={ChooseLayout} />
          <Route path="/double" exact component={asyncDouble} />
          <Route path="/triple" exact component={asyncTriple} />
          <Route path="/quad" exact component={asyncQuad} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

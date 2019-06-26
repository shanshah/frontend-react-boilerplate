import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const loadingComponent = () =>
  (<div>Loading....</div>);

const Home = Loadable({
  loader: () => import('./Home'),
  loading: loadingComponent,
});

const About = Loadable({
  loader: () => import('./About'),
  loading: loadingComponent,
});

const Contact = Loadable({
  loader: () => import('./Contact'),
  loading: loadingComponent,
});

class AppRoutes extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={About} />
          <Route path="/another" component={Contact} />
        </Switch>
      </Router>
    );
  };
}

export default AppRoutes;
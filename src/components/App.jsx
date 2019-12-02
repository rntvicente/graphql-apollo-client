import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Todo from './Todo';
import TodoList from './TodoList';

const App = () => (
  <div className="center w85">
    <Header />
    
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/create" component={Todo} />
      </Switch>
    </div>
  </div>
);

export default App;

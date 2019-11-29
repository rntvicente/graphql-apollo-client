import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from './services/Apollo';
import TodoList from './components/TodoList';

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <div className="App">
      <TodoList />
    </div>
  </ApolloProvider>
);

export default App;

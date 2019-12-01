import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient from './services/Apollo';
import './index.css';
import App from './App';

render(
  <ApolloProvider client={ApolloClient}>
    <App />
  </ApolloProvider>, document.getElementById('root')
);

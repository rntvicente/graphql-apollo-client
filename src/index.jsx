import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter } from 'react-router-dom'

import ApolloClient from './services/Apollo';
import './index.css';
import App from './components/App';

render(
  <BrowserRouter>
    <ApolloProvider client={ApolloClient}>
      <App />
    </ApolloProvider>
  </BrowserRouter>, document.getElementById('root')

);

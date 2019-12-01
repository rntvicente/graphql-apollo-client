import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import  ApolloClient  from 'apollo-client';

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/ck37wfa8k6eyk0126sbi5a38b'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default client;

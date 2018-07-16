import React, { Component } from 'react'
import { render } from 'react-dom' 
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import fetch from 'node-fetch'

import PostList from './components/PostList'

const appRoot = document.getElementById('root')

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch
  }),
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo App!</h2> 
          <PostList></PostList>
        </div>
      </ApolloProvider>
    )
  }
}

render(<App />, appRoot)

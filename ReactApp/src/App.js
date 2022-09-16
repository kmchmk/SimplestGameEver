import React, { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import "./App.css";
import HighScores from './components/HighScores/HighScores';

const uri = 'https://simplest-game-ever.hasura.app/v1/graphql'; // <-- add the URL of the GraphQL server here

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: uri,
      headers: {
        'x-hasura-admin-secret': '<ToDo - add the correct password here>'
      }
    }),
    cache: new InMemoryCache(),
  });
};

const App = () => {
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello World</h1>
        <HighScores />
      </div>
    </ApolloProvider>
  );
};

export default App;

import React, { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import "./App.css";
import HighScores from './components/HighScores/HighScores';
import MyScore  from './components/MyScore/MyScore';
import Button from './components/Button/Button';

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
        <h1>Simplest Game Ever</h1>
        <HighScores />
        <Button />
      </div>
      
      <MyScore/>
    </ApolloProvider>
  );
};

export default App;

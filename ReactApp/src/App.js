import React, { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import "./App.css";
import HighScores from './components/HighScores/HighScores';
import MyScore  from './components/MyScore/MyScore';

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
  const [count, setCount] = React.useState(false);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello World</h1>
        <HighScores />
      </div>
      <div>
      <button type="button" onClick={handleClick}>Click Me</button>
      </div>
      {count}
      <MyScore/>
    </ApolloProvider>
  );
};

export default App;

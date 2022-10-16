import React, { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

import "./App.css";
import HighScores from "./components/HighScores/HighScores";
import MyScore from "./components/MyScore/MyScore";
import Button from "./components/Button/Button";
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import Profile from "./components/profile/profile";

const createApolloClient = () => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "wss://simplest-game-ever.hasura.app/v1/graphql",
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            "x-hasura-admin-secret":
              process.env.REACT_APP_X_HASURA_ADMIN_SECRET,
          },
        },
      },
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
        <MyScore />
      </div>
      <div className="App">
        <h1>Authentication Section</h1>
        <LoginButton />
        <LogoutButton />
        <Profile />
      </div>
    </ApolloProvider>
  );
};

export default App;

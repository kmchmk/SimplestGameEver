import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import React, { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import HighScores from "./components/HighScores/HighScores";
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import MyScore from "./components/MyScore/MyScore";
import Button from "./components/PlayButton/PlayButton";

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


function getMyProfile() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return (
      <div>Loading my profile...</div>
    )
  }
  if (isAuthenticated) {
    return (
      <div>
        <Button />
        <MyScore />
        <LogoutButton />
      </div>
    )
  } else {
    return (<div><LoginButton /></div>)
  }
}


const App = () => {
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Simplest Game Ever</h1>
        <HighScores />
        {getMyProfile()}
      </div >
    </ApolloProvider>
  );
};

export default App;
